import { FilterType } from "@/app/types/filterTypes";

export const getProductsByCategory = (type: FilterType) => {
  if (type === FilterType.ALL) return ''
  if (type === FilterType.MUG) return 'category: "mugs"'
  if (type === FilterType.TSHIRT) return 'category: "t-shirts"'

  return ''
}