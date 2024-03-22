import { FilterType, PriorityFilterType } from "@/types/filterTypes"
import { ProductsAPIResponse } from "@/types/productsResponse"
import { getProductsByCategory, getProductsByPriority } from "@/utils/productFns"
import axios, { AxiosPromise } from "axios"

interface GetProductsParams {
  type: FilterType
  priority: PriorityFilterType
}

const getQuery = (type: FilterType, priority: PriorityFilterType) => {
  return `
    query {
      allProducts(
          filter: { ${getProductsByCategory(type)} },
          ${getProductsByPriority(priority)}
        ) {
        id,
        name,
        image_url,
        price_in_cents,
        category,
        created_at,
        sales,
      }
    }
  `
}

export const getProducts = (
  { type, priority }: GetProductsParams
): AxiosPromise<ProductsAPIResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, 
    {
      query: getQuery(type, priority)
    }
  )
}