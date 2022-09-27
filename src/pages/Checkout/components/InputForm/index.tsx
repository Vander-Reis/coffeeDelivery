import { InputContainer, FormGroup } from './styles'
import { useFormContext } from 'react-hook-form'
export function InputForm() {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <FormGroup>
        <input type="number" placeholder="CEP" {...register('cep')} />
      </FormGroup>

      <FormGroup>
        <input type="text" placeholder="Rua" {...register('street')} required />
      </FormGroup>

      <div>
        <FormGroup>
          <input type="number" placeholder="Número" {...register('number')} />
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </FormGroup>
      </div>

      <div>
        <FormGroup>
          <input type="text" placeholder="Bairro" {...register('district')} />
        </FormGroup>

        <FormGroup>
          <input type="text" placeholder="Cidade" {...register('city')} />
        </FormGroup>

        <FormGroup>
          <input type="text" placeholder="UF" {...register('uf')} />
        </FormGroup>
      </div>
    </InputContainer>
  )
}
