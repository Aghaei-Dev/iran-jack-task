import styled from '@emotion/styled'

export default function Input({ small, icon, ...props }) {
  return (
    <Wrapper style={{ width: small && '100px' }}>
      <span className='icon'>{icon}</span>
      <input
        className='input'
        {...props}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .input {
    width: 100%;
    line-height: 1.5rem;
    padding-left: 2rem;
    border: 2px solid transparent;
    border-radius: var(--sm-radius);
    outline: none;
    background-color: #f8fafc;
    color: #0d0c22;
    transition: 0.5s ease;
  }

  .input::placeholder {
    color: #94a3b8;
    font-family: inherit;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: var(--purple-500);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }

  .icon {
    position: absolute;
    display: grid;
    left: 0.5rem;
    svg {
      width: 1rem;
      height: 1rem;
      fill: none;
      stroke: var(--text-300);
    }
  }
`
