import styled from '@emotion/styled'
import { memo, useEffect, useRef, useState } from 'react'
import { Link, useHref } from 'react-router-dom'
import { useLocalStorage } from '../../hooks'

const BottomNavigation = memo(function BottomNavigation({ array }) {
  const href = useHref()
  const isShowHighlight = array.find((item) => {
    return item.to === href
  })

  const wrapperRef = useRef(null)

  const [page, setPage] = useLocalStorage('page', 0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (wrapperRef) {
      setWidth(wrapperRef.current.firstChild.getBoundingClientRect().width)
    }
    if (isShowHighlight) {
      setPage(isShowHighlight.id)
    }
    //eslint-disable-next-line
  }, [array, page, href])

  const styles = {
    page,
    width,
    isShowHighlight,
  }
  return (
    <Wrapper styles={styles}>
      <ul
        ref={wrapperRef}
        className='fixed-width'
      >
        {array.map((item) => {
          const { id, text, icon, to } = item
          const Icon = icon
          return (
            <Link
              to={to}
              className={`${page === id && isShowHighlight ? 'active' : ''}`}
              key={id}
              onClick={() => setPage(id)}
            >
              <Icon />
              {text}
            </Link>
          )
        })}
      </ul>
    </Wrapper>
  )
})
export default BottomNavigation
const Wrapper = styled('nav')(({ styles: { width, page, isShowHighlight } }) => ({
  width: '100vw',
  margin: 'auto',
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%,0%)',
  cursor: 'pointer',
  background: 'var(--bg-card)',
  zIndex: '10',
  borderTop: '1px solid var(--border-1)',
  ul: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    transition: '.4s left',
    overflow: 'hidden',
    '::before': {
      display: isShowHighlight ? 'block' : 'none',
      content: "''",
      position: 'absolute',
      width: width - 7,
      height: '90%',
      background: 'var(--purple-500)',
      left: `${width * page + 3.5}px`,
      transition: '.4s left',
      zIndex: 100,
      borderRadius: 'var(--radius)',
      opacity: '.2',
    },
  },
  a: {
    fontFamily: 'var(--primary)',
    fontWeight: '500',
    color: 'var(--text-600)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '.1rem',
    width: '100%',
    height: '100%',
    transition: '.3s all',
    fontSize: '.7rem',
    zIndex: '100',
    padding: '1rem 0',
    svg: { width: '1.4rem', zIndex: '100', objectFit: 'contain' },
    ':hover': {
      cursor: 'pointer',
    },
  },
  '.active': {
    color: 'var(--purple-500)',
    svg: {
      path: {
        fill: 'var(--purple-500)',
      },
    },
  },
  '@media (width > 814px)': {
    display: 'none',
  },
}))
