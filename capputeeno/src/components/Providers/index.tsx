"use client"
import { CartContextProvider } from "@/context/CartContext"
import { FilterContextProvider } from "@/context/FilterContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const client = new QueryClient()
  return(
    <QueryClientProvider client={client}>
      <FilterContextProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}