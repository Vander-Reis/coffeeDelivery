import { MapPinLine } from 'phosphor-react'

import { FormContainer } from './styles'
export function Form() {
  return (
    <FormContainer>
      <div>
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
    </FormContainer>
  )
}
