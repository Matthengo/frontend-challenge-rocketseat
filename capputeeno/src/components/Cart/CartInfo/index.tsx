import { centsToReais } from "@/utils/functions"
import { CartInfoContainer } from "./CartInfoContainer.styled"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { priceValues } from "@/utils/priceValues"

export const CartInfo = () => {
  const { value } = useLocalStorage()
  
  const getSubTotal = () => {
    const totalValue = value.reduce((acc, { totalPrice }) => acc + (totalPrice ?? 0), 0)
    return totalValue
  }

  const getFee = () => {
    const subtotal = getSubTotal()

    if(subtotal > priceValues.FEE_PRICE_LIMIT) return 0

    return priceValues.FEE
  }

  const getTotal = () => {
    const subtotal = getSubTotal()
    const fee = getFee()

    return subtotal + fee
  }

  return(
    <CartInfoContainer>
      <div className="top-content">
        <h1 className="title">Resumo do Pedido</h1>
        <div className="total-text">
          <p>Subtotal de produtos</p>
          <p>{centsToReais(getSubTotal())}</p>
        </div>
        <div className="total-text">
          <p>Entrega</p>
          <p>{centsToReais(getFee())}</p>
        </div>
        <div className="bar" />
        <div className="total-text">
          <p className="total">Total</p>
          <p className="total">{centsToReais(getTotal())}</p>
        </div>
        <button>Finalizar a compra</button>
      </div>
      <div className="bottom-content">
        <a>Ajuda</a>
        <a>Reembolsos</a>
        <a>Entregas e Frete</a>
        <a>Trocas e Devoluções</a>
      </div>
    </CartInfoContainer>
  )
}