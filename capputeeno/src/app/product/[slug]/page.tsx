"use client"
import { GoBackBtn } from "@/components/Base/GoBackBtn";
import { ProductMain } from "@/components/Pages/ProductMain.styled";
import { ProductDetails } from "@/components/ProductDetails";
import { useProduct } from "@/hooks/useProduct";

export default function Product({ params }: { params: { slug: string } }) {
  const { data } = useProduct({ id: params.slug })

  return(
    <ProductMain>
      <GoBackBtn />
      <ProductDetails
        id={data?.id}
        title={data?.name}
        category={data?.category}
        image={data?.image_url}
        unitPrice={data?.price_in_cents}
        description={data?.description}
      />
    </ProductMain>
  )
}