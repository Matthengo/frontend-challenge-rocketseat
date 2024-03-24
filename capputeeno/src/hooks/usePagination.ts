import { ITEMS_PER_PAGE, MAX_PAGES } from "@/utils/pagination"

export const usePagination = () => {
  return {
    maxPages: MAX_PAGES,
    itemsPerPage: ITEMS_PER_PAGE,
  }
}