import coffee from '../../assets/coffee.png'

export function Home() {
  return (
    <div>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>

      <img src={coffee} alt="" />
    </div>
  )
}
