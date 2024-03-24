import { FilterType, PriorityFilterType } from "@/types/filterTypes"
import { ProductsAPIResponse, ProductAPIResponse } from "@/types/productsResponse"
import { ITEMS_PER_PAGE } from "@/utils/pagination"
import { getProductsByCategory, getProductsByPriority } from "@/utils/productFns"
import axios, { AxiosPromise } from "axios"

interface GetProductsParams {
  type: FilterType
  priority: PriorityFilterType
  page: number
}

interface GetProductParams {
  id: string
}

export const getProducts = (
  { type, priority, page }: GetProductsParams
): AxiosPromise<ProductsAPIResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, 
    {
      query: `
        query {
          allProducts(
              page: ${page}, perPage: ${ITEMS_PER_PAGE},
              filter: { ${getProductsByCategory(type)} },
              ${getProductsByPriority(priority)},
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
  )
}

export const getProduct = (
  { id }: GetProductParams
): AxiosPromise<ProductAPIResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, 
    {
      query: `
        query {
          Product(id: "${id}") {
            id,
            name,
            image_url,
            price_in_cents,
            category,
            created_at,
            description,
          }
        }
    `
    }
  )
}