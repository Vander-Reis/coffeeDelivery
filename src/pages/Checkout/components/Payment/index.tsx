import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer, CardInput, PaymentContent } from './styles'
export function Payment() {
  return (
    <PaymentContainer>
      <div>
        <CurrencyDollar />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <PaymentContent>
        <label htmlFor="payment-1">
          <input
            type="radio"
            id="payment-1"
            //   {...register('payment', { required: true })}
            value="Cartão de Credito"
            name="payment"
          />
          <CardInput>
            <CreditCard color="#8047F8" />
            <span>Cartão de crédito</span>
          </CardInput>
        </label>
        <label htmlFor="payment-2">
          <input
            type="radio"
            id="payment-2"
            //   {...register('payment', { required: true })}
            value="Cartão de Débito"
            name="payment"
          />
          <CardInput>
            <Bank color="#8047F8" />
            <span>cartão de débito</span>
          </CardInput>
        </label>
        <label htmlFor="payment-3">
          <input
            type="radio"
            id="payment-3"
            //   {...register('payment', { required: true })}
            value={'Dinheiro'}
            name="payment"
          />
          <CardInput>
            <Money color="#8047F8" />
            <span>dinheiro</span>
          </CardInput>
        </label>
      </PaymentContent>
    </PaymentContainer>
  )
}
