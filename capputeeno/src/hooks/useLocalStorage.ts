import { CartContext } from "@/context/CartContext"
import { useContext, useEffect, useState } from "react"

export const useLocalStorage = <T>(item: string) => {
  const { value, updateLocalStorage } = useContext(CartContext)

  return { value, updateLocalStorage }
}