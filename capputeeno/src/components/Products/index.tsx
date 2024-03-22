"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard"
import { List } from "./List.styled"

export const Products = () => {
  const { data } = useProducts()
  
  return(
    <List>
      {
        data?.map(product => (
          <ProductCard
            key={product.id}
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
          />
        ))
      }
    </List>
  )
}