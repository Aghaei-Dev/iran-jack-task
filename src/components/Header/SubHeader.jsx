import styled from '@emotion/styled'
import { CheckBox, Divider, Input, Tabs } from '../'
import { subNav } from '../../assets/constants'
import { Bars, More, Search, Share } from '../../assets/icons'

export default function SubHeader() {
  return (
    <>
      <Wrapper className='flex-between'>
        <div className='flex-between gap-2 container'>
          logo
          <h2>Van Arsdel</h2>
          <Tabs
            offset={'-16px'}
            array={subNav}
          />
        </div>

        <div className='flex-center gap-2'>
          <Share />
          <More />
        </div>
      </Wrapper>

      <Wrapper
        className='flex-between '
        style={{ padding: '0.5rem 1rem' }}
      >
        <div className='flex-center gap-2'>
          <Bars className='bars' />
          <CheckBox text='Text' />
          <CheckBox text='Text' />
          <Divider />
          <CheckBox text='Text' />
          <CheckBox text='Text' />
          <CheckBox text='Text' />
          <Divider />
          <CheckBox text='Text' />
          <CheckBox text='Text' />
        </div>

        <div className='search flex-center gap-2'>
          <button>Filter</button>
          <Input
            small
            icon={<Search />}
            placeholder='Search'
          />
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled('header')(() => ({
  borderBottom: '1px solid var(--border-1)',
  padding: '1rem ',
  '.container': {
    width: '50%',
    maxWidth: '500px',
    h2: {
      textWrap: 'nowrap',
      fontSize: '1.2rem',
      fontWeight: '700',
    },
  },

  '.bars': {
    width: '30px',
    height: '30px',
  },
  '.search': {
    button: {
      fontFamily: 'inherit',
      fontWeight: '600',
      fontSize: '.85rem',
    },
  },

  '@media (width < 814px)': {
    display: 'none',
  },
}))
