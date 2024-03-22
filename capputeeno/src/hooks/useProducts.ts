import { getProducts } from "@/api/products"
import { FilterContext } from "@/context/FilterContext"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"


export const useProducts = () => {
  const { type } = useContext(FilterContext)
  
  const { data } = useQuery({
    queryFn: () => getProducts({ type }),
    queryKey: ['products', type]
  })

  return {
    data: data?.data?.data?.allProducts
  }
}