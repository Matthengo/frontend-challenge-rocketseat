import { getProduct } from "@/api/products"
import { useQuery } from "@tanstack/react-query"

interface UseProductsProps {
  id: string
}

export const useProduct = ({ id }: UseProductsProps) => {
  const { data } = useQuery({
    queryFn: () => getProduct({ id }),
    queryKey: ['product', id],
    enabled: !!id
  })

  const allProducts = data?.data?.data.Product

  return {
    data: allProducts
  }
}