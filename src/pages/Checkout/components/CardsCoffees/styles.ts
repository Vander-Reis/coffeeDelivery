import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e6e5e5;
  margin-top: 1.5rem;
  div img {
    width: 4rem;
    height: 4rem;
  }
`

export const ButonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;

  button {
    margin: 0;
  }
`

export const ButtonDelete = styled.button`
  height: 2.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0 0.5rem;
  border: none;
  background: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`
