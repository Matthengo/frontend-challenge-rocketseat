import { getProducts } from "@/api/products"
import { FilterContext } from "@/context/FilterContext"
import { useQuery } from "@tanstack/react-query"
import { useContext, useDeferredValue } from "react"


export const useProducts = () => {
  const { type, priority, search } = useContext(FilterContext)
  const searchDeferred = useDeferredValue(search)

  const { data } = useQuery({
    queryFn: () => getProducts({ type, priority }),
    queryKey: ['products', type, priority]
  })

  const allProducts = data?.data?.data.allProducts

  const filteredProducts = allProducts?.filter(product => (
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  ))

  return {
    data: filteredProducts
  }
}