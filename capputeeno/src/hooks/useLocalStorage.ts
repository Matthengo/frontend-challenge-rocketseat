import { CartContext } from "@/context/CartContext"
import { useContext, useEffect, useState } from "react"

export const useLocalStorage = () => {
  const { value, updateLocalStorage } = useContext(CartContext)

  return { value, updateLocalStorage }
}