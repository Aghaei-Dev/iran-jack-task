import styled from '@emotion/styled'

export default function SubSidebar() {
  return <Wrapper>ss</Wrapper>
}
const Wrapper = styled('aside')(() => ({
  // background: 'var(--text-100)',
  padding: '1rem',
  borderRight: '1px solid var(--border-1)',

  '@media (width < 814px)': {
    display: 'none',
  },
}))
