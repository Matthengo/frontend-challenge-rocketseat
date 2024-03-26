"use client"
import { LocalStorageProduct } from "@/types/localStorageProduct";
import { SHOPPING_CART } from "@/utils/localStorage";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({
  value: [] as LocalStorageProduct[],
  updateLocalStorage: (value: any) => {}
})

interface ProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ProviderProps){
  const localStorageItem = localStorage.getItem(SHOPPING_CART)

  if (!localStorageItem) localStorage.setItem(SHOPPING_CART, JSON.stringify([]))

  const [value, setValue] = useState<LocalStorageProduct[]>(JSON.parse(localStorageItem ?? '[]'))

  const updateLocalStorage = (newValue: any) => {
    setValue(newValue)
    localStorage.setItem(SHOPPING_CART, JSON.stringify(newValue))
  }

  return(
    <CartContext.Provider value={{
      value,
      updateLocalStorage
    }}>
      { children }
    </CartContext.Provider>
  )
}