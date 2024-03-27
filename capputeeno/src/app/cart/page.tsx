"use client"
import { GoBackBtn } from "@/components/Base/GoBackBtn"
import { CartInfo } from "@/components/Cart/CartInfo"
import { CartItems } from "@/components/Cart/CartItems"
import { CartMain } from "@/components/Pages/CartMain.styled"

export default function Cart(){
  return(
    <CartMain>
      <GoBackBtn />
      <div>
        <CartItems />
        <CartInfo />
      </div>
    </CartMain>
  )
}