import styled from 'styled-components'

export const CoffeContainer = styled.div`
  margin: 0 auto;
  background: ${(props) => props.theme['gray-200']};
  margin-bottom: 40px;
  width: 256px;
  height: 340px;
  border-radius: 6px 36px;

  div {
    text-align: center;

    img {
      margin-top: -12px;
      margin-bottom: 12px;
    }

    h2 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
    }

    p {
      margin-bottom: 33px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }
`

export const TagsContent = styled.span`
  padding: 8px;

  display: inline-flex;
  margin-right: 4px;
  margin-left: 4px;
  border-radius: 999px;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-200']};

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
`
export const BuyCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;

    small {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: none;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-300']};
    cursor: pointer;
  }
`
