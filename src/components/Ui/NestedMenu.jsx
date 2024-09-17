import styled from '@emotion/styled'
import { useState } from 'react'
import { ArrowDown, ArrowUp } from '../../assets/icons'

export default function NestedMenu({ data }) {
  const [flag, setFlag] = useState(false)
  return (
    <>
      <Wrapper onClick={() => setFlag(!flag)}>
        {data.children && <div>{!flag ? <ArrowDown /> : <ArrowUp />}</div>}
        <h1>{data.text}</h1>
      </Wrapper>

      <div style={{ marginLeft: '.5rem' }}>
        {data.children &&
          flag &&
          data.children.map((data, i) => (
            <NestedMenu
              key={i}
              data={data}
            />
          ))}
      </div>
    </>
  )
}

const Wrapper = styled('div')(() => ({
  padding: '1rem',
  borderRadius: 'var(--md-radius)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  h1: {
    color: 'var(--text-400)',
    fontSize: '.9rem',
    fontWeight: '400',
    lineHeight: '0',
  },
  svg: {
    width: '1.1rem',
    height: '1.1rem',
  },
  ':hover': {
    background: 'var(--text-100)',
  },
}))
