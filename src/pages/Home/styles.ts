import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 70rem;
  margin: 5.75rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HomeContent = styled.div`
  h1 {
    width: 36.75rem;
    height: 7.75rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.875rem;
  }

  p {
    width: 36.75rem;
    height: 7.75rem;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const SectionGridItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-300',
  black: 'black-200',
  yellowLigth: 'yellow-200',
  purple: 'purple-200',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const InfoCoffes = styled.span<StatusProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`
