import styled from '@emotion/styled'
import { Tabs } from '../'
import { leftSidebar } from '../../assets/constants'

export default function MainSidebar() {
  return (
    <Wrapper className='flex-column gap-1'>
      <Tabs
        array={leftSidebar}
        orientation='vertical'
        smallText
      />
    </Wrapper>
  )
}
const Wrapper = styled('aside')(() => ({
  background: 'var(--text-100)',
  padding: '.2rem',
  borderRight: '1px solid var(--border-1)',
  width: '68px',
  '@media (width < 814px)': {
    display: 'none',
  },
}))
