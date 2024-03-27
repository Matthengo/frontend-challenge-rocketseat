import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FiShoppingBag } from "react-icons/fi";
import { CartCount } from "./CartCount.styled";
import { CartContainer } from "./CartContainer.styled";
import { useRouter } from "next/navigation";

export const Cart = () => {
  const { value } = useLocalStorage()
  const router = useRouter()

  return(
    <CartContainer>
      <button onClick={() => router.push('/cart')}>
        <FiShoppingBag size={24} color="#737380" />
      </button>
      {
        value.length > 0 &&
        <CartCount>{ value.length }</CartCount>
      }
    </CartContainer>
  )
}