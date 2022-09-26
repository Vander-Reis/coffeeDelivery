import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 40rem;
  height: 12.9rem;
  background: ${(props) => props.theme['gray-100']};
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  div {
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-bottom: 2px;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }
`

export const PaymentContent = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`

export const CardInput = styled.div`
  padding: 1rem 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  .card-input {
    flex: 1;
  }
  &:hover {
    background: ${(props) => props.theme['black-200']};
  }
  input:checked + & {
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
    background: ${(props) => props.theme['purple-100']};
  }
  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    &:hover {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`
