"use client"
import { FilterType, PriorityFilterType } from "@/types/filterTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 1,
  type: FilterType.ALL,
  priority: PriorityFilterType.NEW,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityFilterType) => {}
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityFilterType.NEW)

  return(
    <FilterContext.Provider value={{
      search,
      setSearch,
      page,
      setPage,
      type,
      setType,
      priority,
      setPriority,
    }}>
      { children }
    </FilterContext.Provider>
  )
}