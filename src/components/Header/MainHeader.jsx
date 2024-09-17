import styled from '@emotion/styled'
import { ArrowLeft, ArrowRight, Close, Logo, Maximize, Minimize, More, Search } from '../../assets/icons'
import { Avatar, Input } from '../'
import { avatar } from '../../assets/images'

export default function MainHeader() {
  return (
    <Wrapper className='flex-between'>
      <section className='logo'>
        <Logo />
      </section>
      <section className='flex-center'>
        <ArrowLeft />
        <ArrowRight />
        <Input
          icon={<Search />}
          placeholder='Search'
        />
      </section>
      <section className='flex-center gap-2'>
        <More />
        <Avatar
          src={avatar}
          online
        />
        <Minimize />
        <Maximize />
        <Close />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled('header')(() => ({
  background: 'var(--text-100)',
  padding: '.5rem',
  borderBottom: '1px solid var(--border-1)',
  '.logo': {
    padding: '0 .7rem',
  },
  '@media (width < 814px)': {
    display: 'none',
  },
}))
