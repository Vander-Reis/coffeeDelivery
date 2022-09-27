import { useLocation } from 'react-router-dom'
import { NewAddressFormDate } from '../Checkout/index'
import successPng from '../../assets/Illustration.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import {
  OrdenInfo,
  SucessContainer,
  SucessContent,
  Details,
  ColorsIcons,
} from './styles'

export function Sucess() {
  const location = useLocation()

  const state = location.state as NewAddressFormDate

  console.log(state)
  return (
    <SucessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SucessContent>
        <OrdenInfo>
          <Details>
            <ColorsIcons statusColor="purple">
              <MapPin weight="fill" size={16} />
            </ColorsIcons>
            <div>
              <span>
                Entrega em&nbsp;
                <strong>
                  {state.street}, {state.number}
                </strong>
              </span>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            </div>
          </Details>

          <Details>
            <ColorsIcons statusColor="yellowLigth">
              <Timer weight="fill" size={16} />
            </ColorsIcons>
            <div>
              <span>Previsão de entrega</span>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </div>
          </Details>

          <Details>
            <ColorsIcons statusColor="yellow">
              <CurrencyDollar weight="fill" size={16} />
            </ColorsIcons>
            <div>
              <span>Pagamento na entrega</span>
              <p>
                <strong>{state.payment}</strong>
              </p>
            </div>
          </Details>
        </OrdenInfo>

        <div>
          <img src={successPng} alt="" />
        </div>
      </SucessContent>
    </SucessContainer>
  )
}
