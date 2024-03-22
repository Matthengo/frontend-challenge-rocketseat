import { Product } from "./product"

export type ProductsAPIResponse = {
  data: {
    allProducts: Product[]
  }

}