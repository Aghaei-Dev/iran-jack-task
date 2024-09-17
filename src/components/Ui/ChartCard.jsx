import styled from '@emotion/styled'

import { Tabs } from '../'
import { Gear, More, ReSize, Search } from '../../assets/icons'
const iconsList = [
  { id: 1, icon: <Search /> },
  { id: 2, icon: <ReSize /> },
  { id: 3, icon: <Gear /> },
  { id: 4, icon: <More fill='var(--text-300)' /> },
]
export default function ChartCard({ title, desc, singleIcon, tabs, array, chart }) {
  return (
    <Wrapper className='flex-column gap-2'>
      <div className='flex-between'>
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className='flex-between gap-1 icons'>
          {singleIcon
            ? iconsList[3].icon
            : iconsList.map((item) => {
                return <span key={item.id}>{item.icon}</span>
              })}
        </div>
      </div>
      {tabs && (
        <Tabs
          name={title}
          borderColor='var(--green-500)'
          array={array}
          fullWidth={false}
        />
      )}

      <div>{chart}</div>
      <button className='more'>View Details</button>
    </Wrapper>
  )
}
const Wrapper = styled('article')(() => ({
  background: 'var(--bg-card)',
  padding: '1rem',
  borderRadius: 'var(--md-radius)',
  border: '1px solid var(--border-1)',
  h1: {
    fontWeight: '600',
    fontSize: '1rem',
  },
  p: {
    fontWeight: '400',
    fontSize: '.75rem',
  },
  '.more': {
    color: 'var(--purple-500)',
    fontWeight: '600',
    fontSize: '1rem',
    alignSelf: 'end',
    marginTop: 'auto',
  },
  '.icons': {
    // background: 'red',
    svg: {
      width: '25px',
      height: '25px',
    },
  },
}))
