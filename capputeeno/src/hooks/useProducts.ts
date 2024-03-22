import { getProducts } from "@/api/products"
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
  const { data } = useQuery({
    queryFn: getProducts,
    queryKey: ['products']
  })

  return {
    data: data?.data?.data?.allProducts
  }
}