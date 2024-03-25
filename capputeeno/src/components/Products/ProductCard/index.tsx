import { useRouter } from "next/navigation"
import { Card } from "./Card.styled"
import { centsToReais } from '@/utils/functions'

interface ProductProps {
  id: string
  image: string
  title: string
  price: number
}

export const ProductCard = (props: ProductProps) => {
  const router = useRouter()
  
  const handleCardClick = () => {
    router.push(`/product/${props.id}`)
  }

  return(
    <Card onClick={() => handleCardClick()}>
      <img src={props.image} alt={props.title} />
      <div className="info-content">
        <h3 className="title">{props.title}</h3>
        <div className="bar" />
        <p className="price">{centsToReais(props.price)}</p>
      </div>
    </Card>
  )
}