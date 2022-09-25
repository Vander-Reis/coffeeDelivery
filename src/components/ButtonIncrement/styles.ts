import styled from 'styled-components'

export const ButtonContainer = styled.div`
  /* width: 4.5rem; */
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.5rem 0.35rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  margin-left: 0.94rem;

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme['purple-300']};
    cursor: pointer;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
