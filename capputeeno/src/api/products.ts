import { FilterType } from "@/app/types/filterTypes"
import { ProductsAPIResponse } from "@/app/types/productsResponse"
import { getProductsByCategory } from "@/utils/productFns"
import axios, { AxiosPromise } from "axios"

interface GetProductsParams {
  type: FilterType
}

const getQuery = (type: FilterType) => {
  return `
    query {
      allProducts(filter: { ${getProductsByCategory(type)} }) {
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
  { type }: GetProductsParams
): AxiosPromise<ProductsAPIResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, 
    {
      query: getQuery(type)
    }
  )
}