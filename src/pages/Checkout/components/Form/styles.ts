import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 40rem;
  height: 23.25rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  margin-top: 1rem;
  padding: 2.5rem;

  > div {
    display: flex;
    align-self: start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-300']};
    }
  }
`
