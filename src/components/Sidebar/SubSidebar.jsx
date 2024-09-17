import styled from '@emotion/styled'

export default function SubSidebar() {
  return <Wrapper>ss</Wrapper>
}
const Wrapper = styled('aside')(() => ({
  padding: '1rem',
  borderRight: '1px solid var(--border-1)',

  '@media (width < 814px)': {
    display: 'none',
  },
}))
