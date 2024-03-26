import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FiShoppingBag } from "react-icons/fi";
import { CartCount } from "./CartCount.styled";
import { CartContainer } from "./CartContainer.styled";
import { SHOPPING_CART } from "@/utils/localStorage";
import { useEffect } from "react";

export const Cart = () => {
  const { value } = useLocalStorage(SHOPPING_CART)

  return(
    <CartContainer>
      <FiShoppingBag size={24} color="#737380" />
      {
        value.length > 0 &&
        <CartCount>{ value.length }</CartCount>
      }
    </CartContainer>
  )
}