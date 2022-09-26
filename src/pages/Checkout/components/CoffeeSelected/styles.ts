import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 24rem;
  min-height: 31.125rem;
  background: ${(props) => props.theme['gray-100']};
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
`

export const ConfirmRequest = styled.div`
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  height: 2.875rem;
  background: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
    background: ${(props) => props.theme['yellow-100']};
  }
`
