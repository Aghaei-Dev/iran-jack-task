import styled from '@emotion/styled'
import { NestedMenu } from '../'

const data = {
  id: 1,
  pid: null,
  text: 'Group Title',
  children: [
    {
      id: 2,
      pid: 1,
      text: 'Option 1',
      children: [
        { id: 1, pid: 4, text: 'Item 1' },
        { id: 2, pid: 4, text: 'Item 2' },
      ],
    },
    {
      id: 3,
      pid: 1,
      text: 'Option 2',
      children: [
        { id: 1, pid: 3, text: 'Item 1' },
        { id: 2, pid: 3, text: 'Item 2' },
        { id: 3, pid: 3, text: 'Item 3' },
        { id: 4, pid: 3, text: 'Item 4' },
        { id: 5, pid: 3, text: 'Item 5' },
      ],
    },
  ],
}
export default function SubSidebar() {
  return (
    <Wrapper>
      <NestedMenu data={data} />
    </Wrapper>
  )
}
const Wrapper = styled('aside')(() => ({
  padding: '1rem .5rem',
  borderRight: '1px solid var(--border-1)',

  '@media (width < 814px)': {
    display: 'none',
  },
}))
