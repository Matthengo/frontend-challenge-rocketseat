import { usePagination } from "@/hooks/usePagination"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PaginationItemsContainer } from "./PaginationItemsContainer.styled";
import { PaginationItemBtn } from "./PaginationItemBtn.styled";
import { useContext } from "react";
import { FilterContext } from "@/context/FilterContext";

export const PaginationItems = () => {
  const { maxPages } = usePagination()
  const { page, setPage } = useContext(FilterContext)
  
  const handlePageChange = (number: number) => {
    setPage(number - 1)
  }

  const hasSamePage = (number: number) => {
    return page === number - 1
  }

  const handleBackwards = () => {
    if (page === 0) return
    setPage(page - 1)
  }

  const handleFowards = () => {
    if(page >= maxPages - 1) return
    setPage(page + 1)
  }

  return(
    <PaginationItemsContainer>
      {
        Array
          .from({ length: maxPages }, (_, index) => index + 1)
          .map(el => (
            <PaginationItemBtn 
              selected={hasSamePage(el)}
              key={el} 
              onClick={() => handlePageChange(el)}
            >
              { el }
            </PaginationItemBtn>
          ))
      }
      <PaginationItemBtn selected={false} onClick={() => handleBackwards()}>
        <IoIosArrowBack />
      </PaginationItemBtn>
      <PaginationItemBtn selected={false} onClick={() => handleFowards()}>
        <IoIosArrowForward />
      </PaginationItemBtn>
    </PaginationItemsContainer>
  )
}