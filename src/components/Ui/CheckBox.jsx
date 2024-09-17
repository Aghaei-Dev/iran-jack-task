import styled from '@emotion/styled'

export default function CheckBox({ text }) {
  return (
    <Wrapper>
      <input
        type='checkbox'
        id='cbx-46'
        className='inp-cbx'
      />
      <label
        htmlFor='cbx-46'
        className='cbx'
      >
        <span>
          <svg
            viewBox='0 0 12 10'
            height='10px'
            width='12px'
          >
            <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
          </svg>
        </span>
        <span className='text'>{text}</span>
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input[type='checkbox'] {
    display: none;
    visibility: hidden;
  }

  .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 30px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098a9;
    transition: all 0.2s ease;
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: -4px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child:before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--purple-500);
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .cbx span:last-child {
    padding-left: 8px;
  }
  .cbx:hover span:first-child {
    border-color: var(--purple-500);
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: var(--purple-500);
    border-color: var(--purple-500);
    animation: wave-46 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }
  .text {
    line-height: 0;
  }
  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }
`
