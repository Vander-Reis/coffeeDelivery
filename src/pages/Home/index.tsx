import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee.png'
import { coffes } from '../../data/coffes'
import { CardCoffe } from './CardCoffee'
import {
  HomeContainer,
  ListCoffes,
  MainContainer,
  HomeContent,
  SectionGridItens,
  InfoCoffes,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <HomeContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <SectionGridItens>
            <div>
              <InfoCoffes statusColor="yellow">
                <ShoppingCart size={16} weight="fill" />
              </InfoCoffes>

              <span>Compra simples e segura</span>
            </div>

            <div>
              <InfoCoffes statusColor="black">
                <Package size={16} weight="fill" />
              </InfoCoffes>

              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <InfoCoffes statusColor="yellowLigth">
                <Timer size={16} weight="fill" />
              </InfoCoffes>

              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <InfoCoffes statusColor="purple">
                <Coffee size={16} weight="fill" />
              </InfoCoffes>

              <span>O café chega fresquinho até você</span>
            </div>
          </SectionGridItens>
        </HomeContent>
        <img src={coffee} alt="" />
      </MainContainer>

      <h1 className="coffes">Nossos cafés</h1>
      <ListCoffes>
        {coffes.map((cofe) => {
          return <CardCoffe key={cofe.id} coffee={cofe} />
        })}
      </ListCoffes>
    </HomeContainer>
  )
}
