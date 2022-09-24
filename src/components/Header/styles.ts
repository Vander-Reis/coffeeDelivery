import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-300']};
    padding: 0.625rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const CartConteiner = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-300']};
  position: relative;

  span {
    width: 1.25rem;
    height: 1.25rem;
    padding: 1rem;
    position: absolute;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1.64rem;
    left: 1.64rem;
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.75rem;
  }
`
