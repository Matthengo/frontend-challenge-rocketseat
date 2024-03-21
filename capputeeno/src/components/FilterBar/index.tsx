"use client"
import { FilterContainer } from "./FilterContainer.styled"
import { PriorityFilter } from "./PriorityFilter"
import { TypeFilter } from "./TypeFilter"

export const FilterBar = () => {
  return(
    <FilterContainer>
      <TypeFilter />
      <PriorityFilter />
    </FilterContainer>
  )
}