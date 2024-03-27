import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartItemsContainer } from "./CartItemsContainer.styled"
import { centsToReais } from "@/utils/functions"
import { CartItemsCard } from "./CartItemsCard"

export const CartItems = () => {
  const { value, updateLocalStorage } = useLocalStorage()
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((product) => {
      if(product.id === id) {
        const totalPrice = Number(product.unitPrice) * quantity
        return { ...product, quantity, totalPrice }
      }
      
      return product
    })

    updateLocalStorage(newValue)
  }

  const renderTotalPrice = () => {
    const totalValue = value.reduce((acc, { totalPrice }) => acc + (totalPrice ?? 0), 0)
    return totalValue
  }

  const deleteItem = (id: string) => {
    const filter = value.filter((product) => product.id !== id)

    updateLocalStorage(filter)
  }

  return(
    <CartItemsContainer>
      <h3 className="title">Seu Carrinho</h3>
      <div className="total">
        <span>Total ({value.length} produtos)</span>
        <span>{' '}</span>
        <span className="value">{centsToReais(renderTotalPrice())}</span>
      </div>
      {
        value.map((product) => (
          <CartItemsCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.totalPrice}
            quantity={product.quantity}
            handleUpdateQuantity={handleUpdateQuantity}
            handleDeleteItem={deleteItem}
          />
        ))
      }
    </CartItemsContainer>
  )
}