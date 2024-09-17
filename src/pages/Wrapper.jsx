import { Outlet } from 'react-router-dom'
import { BottomNavigation, MainHeader, MainSidebar, MobileHeader, SubHeader, SubSidebar } from '../components'
import { bottomNav } from '../assets/constants'
import styled from '@emotion/styled'

export default function Wrapper() {
  return (
    <Main>
      <MainHeader />
      <div className='layout-1'>
        <MainSidebar />
        <MobileHeader />
        <section className='outer'>
          <SubHeader />
          <BottomNavigation array={bottomNav} />
          <div className='layout-2'>
            <SubSidebar />
            <section className='outlet'>
              <Outlet />
            </section>
          </div>
        </section>
      </div>
    </Main>
  )
}

const Main = styled('main')(() => ({
  height: 'calc(100dvh - 49px)',
  '.layout-1': {
    display: 'grid',
    gridTemplateColumns: '68px auto',
    '@media (width < 814px)': {
      display: 'initial',
    },
  },
  '.outer': { height: 'calc(100dvh - 49px)' },
  '.layout-2': {
    height: 'calc(100dvh - 162px)',
    display: 'grid',
    gridTemplateColumns: '180px auto',
    '@media (width < 814px)': {
      display: 'initial',
    },
  },
  '.outlet': {
    overflowY: 'scroll',
  },
}))
