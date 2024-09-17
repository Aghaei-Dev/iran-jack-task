import styled from '@emotion/styled'
import { memo, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../../hooks'

const Tabs = memo(function Tabs({
  array,
  borderColor = 'var(--purple-500)',
  fullWidth = true,
  name,
  orientation = 'horizontal',
  smallText = false,
  offset = 0,
}) {
  const wrapperRef = useRef(null)

  const [tab, setTab] = useLocalStorage(name, 0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (wrapperRef) {
      if (orientation === 'vertical') {
        setHeight(wrapperRef.current.firstChild.getBoundingClientRect().height)
      } else {
        setWidth(wrapperRef.current.firstChild.getBoundingClientRect().width)
      }
    }

    //eslint-disable-next-line
  }, [array, tab])

  const styles = {
    tab,
    borderColor,
    height,
    width,
    fullWidth,
    orientation,
    smallText,
    offset,
  }
  return (
    <Wrapper
      styles={styles}
      className='fixed-width'
    >
      <ul ref={wrapperRef}>
        {array.map((item) => {
          const { id, text, icon } = item
          let Icon = icon
          return (
            <button
              className={`${tab === id ? 'active' : ''}`}
              key={id}
              onClick={() => setTab(id)}
            >
              {icon && <Icon />}
              {text}
            </button>
          )
        })}
      </ul>
    </Wrapper>
  )
})
export default Tabs
const Wrapper = styled('nav')(({ styles: { height, width, tab, borderColor, fullWidth, orientation, smallText, offset } }) => ({
  cursor: 'pointer',
  zIndex: '10',
  width: fullWidth ? '100%' : '75%',
  overflow: 'visible',

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    alignItems: 'center',
    position: 'relative',
    transition: orientation === 'horizontal' ? '.4s left' : '.4s top ',

    '::before': {
      // left: `${width * page + 3.5}px`,
      // transition: '.4s left',

      display: 'block',
      content: "''",
      position: 'absolute',

      height: orientation === 'vertical' ? height - 7 : '6%',

      width: orientation === 'vertical' ? '3%' : width - 7,
      background: borderColor,
      left: orientation === 'vertical' ? `0` : `${width * tab + 3.5}px`,
      top: orientation === 'vertical' ? `${height * tab + 3.5}px` : 'unset',
      bottom: orientation === 'horizontal' ? offset : 'unset',

      transition: orientation === 'horizontal' ? '.4s left' : '.4s top ',
      zIndex: 100,
      opacity: '1',
    },
  },
  button: {
    textWrap: 'nowrap',
    fontFamily: 'var(--primary)',
    fontWeight: smallText ? '400' : '500',
    color: 'var(--text-500)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '.1rem',
    width: '100%',
    height: '100%',
    padding: '.5rem 0',
    transition: '.3s all',
    fontSize: smallText ? '.625rem' : '.8rem',
    lineHeight: '1.3',
    zIndex: '100',
    svg: { width: '1.4rem', zIndex: '100', objectFit: 'contain' },

    ':hover': {
      cursor: 'pointer',
    },
    '@media (width < 450px)': {
      padding: '1rem 0',
    },
  },
  '.active': {
    color: borderColor,
    fontWeight: smallText ? '400' : '600',
    svg: {
      path: {
        fill: borderColor,
      },
    },
  },
}))
