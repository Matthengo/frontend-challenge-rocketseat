import { ProductsAPIResponse } from "@/app/types/productsResponse"
import axios, { AxiosPromise } from "axios"

export const getProducts = (): AxiosPromise<ProductsAPIResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, 
    {
      query: `
        query {
          allProducts {
            id,
            name,
            image_url,
            price_in_cents,
          }
        }
      `
    }
  )
}