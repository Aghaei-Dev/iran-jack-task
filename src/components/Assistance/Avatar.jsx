import styled from '@emotion/styled'
import { Tick } from '../../assets/icons'

export default function Avatar({ src, online, name }) {
  const styles = {
    online,
  }
  return (
    <Wrapper styles={styles}>
      <Img
        src={src}
        alt={name}
      />
      <Tick />
    </Wrapper>
  )
}
const Wrapper = styled('span')(({ styles: { online } }) => ({
  position: 'relative',
  width: '32px',
  height: '32px',
  overflow: 'visible',
  svg: {
    display: online ? 'block' : 'none',
    position: 'absolute',
    bottom: '0',
    right: '0',
    transform: 'translate(30%,0%)',
  },
}))

const Img = styled('img')(() => ({
  aspectRatio: '1/1',
  objectFit: 'cover',
  borderRadius: '50%',
}))
