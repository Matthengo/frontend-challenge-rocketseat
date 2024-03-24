import { Product } from "./product"

export type ProductsAPIResponse = {
  data: {
    allProducts: Product[]
  }
}

export type ProductAPIResponse = {
  data: {
    Product: Product
  }
}