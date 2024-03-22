import { getProducts } from "@/api/products"
import { FilterContext } from "@/context/FilterContext"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"


export const useProducts = () => {
  const { type, priority } = useContext(FilterContext)
  
  const { data } = useQuery({
    queryFn: () => getProducts({ type, priority }),
    queryKey: ['products', type, priority]
  })

  return {
    data: data?.data?.data?.allProducts
  }
}