"use client"
import { FilterType } from "@/app/types/filterTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 1,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [type, setType] = useState(FilterType.ALL)

  return(
    <FilterContext.Provider value={{
      search,
      setSearch,
      page,
      setPage,
      type,
      setType,
    }}>
      { children }
    </FilterContext.Provider>
  )
}