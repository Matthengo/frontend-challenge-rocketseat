import { Card } from "./Card.styled"

interface ProductProps {
  image: string
  title: string
  price: number
}

export const ProductCard = (props: ProductProps) => {
  const centsToReais = (cents: number) => {
    const reais = cents / 100
    return reais.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  
  return(
    <Card>
      <img src={props.image} alt={props.title} />
      <div className="info-content">
        <h3 className="title">{props.title}</h3>
        <div className="bar" />
        <p className="price">{centsToReais(props.price)}</p>
      </div>
    </Card>
  )
}