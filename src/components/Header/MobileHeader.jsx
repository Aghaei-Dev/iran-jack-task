import styled from '@emotion/styled'
import { Avatar, Tabs } from '../'
import { tabs } from '../../assets/constants'
import { Bot, More } from '../../assets/icons'
import { avatar } from '../../assets/images'

export default function MobileHeader() {
  return (
    <Wrapper>
      <section className='fixed-width flex-between'>
        <div className='avatar flex-center gap-2'>
          <Avatar src={avatar} />
          <h2>Van Arsdel</h2>
        </div>
        <div className='icons flex-between gap-2'>
          <Bot />
          <More />
        </div>
      </section>
      <Tabs
        array={tabs}
        name='head'
      />
    </Wrapper>
  )
}
const Wrapper = styled('header')(() => ({
  borderBottom: '1px solid var(--border-1)',
  section: {
    padding: '.5rem 0 ',
    h2: {
      fontWeight: '700',
    },
  },
  '@media (width > 814px)': {
    display: 'none',
  },
}))
