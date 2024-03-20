import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FiShoppingBag } from "react-icons/fi";
import { CartCount } from "./CartCount.styled";
import { CartContainer } from "./CartContainer.styled";

export const Cart = () => {
  const { value } = useLocalStorage('shopping-cart')

  return(
    <CartContainer>
      <FiShoppingBag size={24} color="#737380" />
      {
        value.length &&
        <CartCount>{ value.length }</CartCount>
      }
    </CartContainer>
  )
}