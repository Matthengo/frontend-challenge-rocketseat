import { FiShoppingBag } from "react-icons/fi"
import { ProductDetailsBtn } from "./ProductDetailsBtn.styled"
import { ProductDetailsContainer } from "./ProductDetailsContainer.styled"
import { centsToReais } from '@/utils/functions'
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { LocalStorageProduct } from "@/types/localStorageProduct"
import { priceValues } from "@/utils/priceValues"

interface ProductDetailsProps {
  category: string | undefined
  title: string | undefined
  unitPrice: number | undefined
  description: string | undefined
  image: string | undefined
  id: string | undefined
}

export const ProductDetails = (props: ProductDetailsProps) => { 
  const { value, updateLocalStorage } = useLocalStorage()
  
  const addToLocalStorage = () => {
    const foundItem = value.find(
      (product: LocalStorageProduct) => product.id === props.id 
    )
    
    if(foundItem){
      const newValue = value.map((product: LocalStorageProduct) => {
        if(product.id === props.id) {
          const quantity = Number(product.quantity) + 1
          return { ...product, quantity, totalPrice: quantity * Number(product.unitPrice) }
        }
        return product
      })
      
      updateLocalStorage(newValue)
      return
    }
    
    value.push({ ...props, quantity: 1, totalPrice: props.unitPrice })

    updateLocalStorage([...value])
  }

  return(
    <ProductDetailsContainer>
      <img src={props.image} alt={props.title} />
      <div>
        <div>
          <p className="category">{props.category}</p>
          <h2 className="title">{props.title}</h2>
          <p className="price">{ centsToReais(props.unitPrice || 0) }</p>
          <p className="fee">*Frete de {centsToReais(priceValues.FEE)} para todo o Brasil. Grátis para compras acima de {centsToReais(priceValues.FEE_PRICE_LIMIT)}.</p>
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