import { ReactNode } from "react"
import { PaginationItems } from "./PaginationItems"
import { PaginationContainer } from "./PaginationContainer.styled"

interface PaginationProps {
  children: ReactNode
}

export const Pagination = ({ children }: PaginationProps) => {
  return(
    <PaginationContainer>
      <PaginationItems />
      {children}
      <PaginationItems />
    </PaginationContainer>
  )
}