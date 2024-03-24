import { FilterContext } from "@/context/FilterContext"
import { FilterType } from "@/types/filterTypes"
import { ITEMS_PER_PAGE, MAX_PAGES, MAX_PAGES_BY_TYPE } from "@/utils/pagination"
import { useContext } from "react"

export const usePagination = () => {
  const { type } = useContext(FilterContext)

  return {
    maxPages: type !== FilterType.ALL ? MAX_PAGES_BY_TYPE : MAX_PAGES,
    itemsPerPage: ITEMS_PER_PAGE,
  }
}