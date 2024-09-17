import styled from '@emotion/styled'

export default function Divider() {
  return <Wrapper />
}
const Wrapper = styled('span')(() => ({
  height: '25px',
  borderLeft: '1px solid var(--border-1)',
}))
