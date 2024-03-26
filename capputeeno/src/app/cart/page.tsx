"use client"
import { GoBackBtn } from "@/components/Base/GoBackBtn"
import { CartItems } from "@/components/Cart/CartItems"
import { CartMain } from "@/components/Pages/CartMain.styled"

export default function Cart(){
  return(
    <CartMain>
      <div>
        <GoBackBtn />
        <CartItems />
      </div>
      <div>
        Info Carrinho
      </div>
    </CartMain>
  )
}