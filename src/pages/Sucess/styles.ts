import styled from 'styled-components'

export const SucessContainer = styled.div`
  max-width: 70rem;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 5rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-300']};
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 2.5rem;
  }
`

export const SucessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrdenInfo = styled.div`
  width: 526px;
  height: 270px;

  position: relative;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 6px 36px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 2rem;
  line-height: 130%;
`

const STATUS_COLORS = {
  yellow: 'yellow-300',
  yellowLigth: 'yellow-200',
  purple: 'purple-200',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const ColorsIcons = styled.div<StatusProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`
