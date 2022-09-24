interface CoffeeCardProps {
  image: string
  tags: string[]
  title: string
  about: string
  price: number
}

export function CardCoffe(coffee: CoffeeCardProps) {
  return (
    <div>
      <div>
        <img src={coffee.image} alt="" />
        <div>
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
      </div>
    </div>
  )
}
