import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const FormGroup = styled.div`
  height: 2.625rem;
  background: #eeeded;
  border: 1px solid #e6e5e5;

  border-radius: 4px;

  margin-bottom: 16px;

  input {
    background: none;
    padding: 12px;
    border: none;
    width: 100%;
    height: 2.625rem;
  }

  &:nth-child(1) {
    width: 200px;
  }

  &:nth-child(2) {
    width: 100%;
  }
`
