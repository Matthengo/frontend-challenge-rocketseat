import { FiShoppingBag } from "react-icons/fi"
import { ProductDetailsBtn } from "./ProductDetailsBtn.styled"
import { ProductDetailsContainer } from "./ProductDetailsContainer.styled"
import { centsToReais } from '@/utils/functions'
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { SHOPPING_CART } from "@/utils/localStorage"
import { LocalStorageProduct } from "@/types/localStorageProduct"

interface ProductDetailsProps {
  category: string | undefined
  title: string | undefined
  price: number | undefined
  description: string | undefined
  image: string | undefined
  id: string | undefined
}

export const ProductDetails = (props: ProductDetailsProps) => { 
  const { value, updateLocalStorage } = useLocalStorage(SHOPPING_CART)
  
  const addToLocalStorage = () => {
    const foundItem = value.find(
      (product: LocalStorageProduct) => product.id === props.id 
    )
    
    if(foundItem){
      const newValue = value.map((product: LocalStorageProduct) => {
        if(product.id === props.id) return { ...product, quantity: Number(product.quantity) + 1 }
        return product
      })
      
      updateLocalStorage(newValue)
      return
    }
    
    value.push({ ...props, quantity: 1 })

    updateLocalStorage([...value])
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
        <ProductDetailsBtn onClick={() => addToLocalStorage()}>
          <FiShoppingBag size={24} color="#F5F5FA" />
          Adicionar ao Carrinho
        </ProductDetailsBtn>
      </div>
    </ProductDetailsContainer>
  )
}