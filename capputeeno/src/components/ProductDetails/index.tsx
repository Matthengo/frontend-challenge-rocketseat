import { FiShoppingBag } from "react-icons/fi"
import { ProductDetailsBtn } from "./ProductDetailsBtn.styled"
import { ProductDetailsContainer } from "./ProductDetailsContainer.styled"

interface ProductDetailsProps {
  category: string | undefined
  title: string | undefined
  price: number | undefined
  description: string | undefined
  image: string | undefined
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const centsToReais = (cents: number) => {
    const reais = cents / 100
    return reais.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  
  return(
    <ProductDetailsContainer>
      <img src={props.image} alt={props.title} />
      <div>
        <div>
          <p className="category">{props.category}</p>
          <h2 className="title">{props.title}</h2>
          <p className="price">{ centsToReais(props.price || 0) }</p>
          <p className="fee">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <p className="description-title">Descrição</p>
          <p className="description-text">{props.description}</p>
        </div>
        <ProductDetailsBtn>
          <FiShoppingBag size={24} color="#F5F5FA" />
          Adicionar ao Carrinho
        </ProductDetailsBtn>
      </div>
    </ProductDetailsContainer>
  )
}