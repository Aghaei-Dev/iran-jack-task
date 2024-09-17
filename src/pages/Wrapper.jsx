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
        <section>
          <SubHeader />
          <BottomNavigation array={bottomNav} />
          <div className='layout-2'>
            <SubSidebar />
            <Outlet />
          </div>
        </section>
      </div>
    </Main>
  )
}

const Main = styled('main')(() => ({
  // background: 'red',
  '.layout-1': {
    display: 'grid',
    gridTemplateColumns: '68px auto',
    '@media (width < 814px)': {
      display: 'initial',
    },
  },
  '.layout-2': {
    display: 'grid',
    gridTemplateColumns: '180px auto',
    '@media (width < 814px)': {
      display: 'initial',
    },
  },
}))
