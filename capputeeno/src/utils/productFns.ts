import { FilterType, PriorityFilterType } from "@/app/types/filterTypes";

export const getProductsByCategory = (type: FilterType) => {
  if (type === FilterType.ALL) return ''
  if (type === FilterType.MUG) return 'category: "mugs"'
  if (type === FilterType.TSHIRT) return 'category: "t-shirts"'

  return ''
}

export const getProductsByPriority = (priority: PriorityFilterType) => {
  if(priority === PriorityFilterType.NEW) {
    return 'sortField: "created_at", sortOrder: "DSC"'
  }
  if(priority === PriorityFilterType.BESTSELLERS) {
    return 'sortField: "sales", sortOrder: "DSC"'
  }
  if(priority === PriorityFilterType.HIGHTESTPRICE) {
    return 'sortField: "price_in_cents", sortOrder: "DSC"'
  }
  if(priority === PriorityFilterType.LOWESTPRICE) {
    return 'sortField: "price_in_cents", sortOrder: "ASC"'
  }

  return ''
}