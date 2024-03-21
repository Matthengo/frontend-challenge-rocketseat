import { useContext } from "react"
import { FilterItem } from "./FilterItem.styled"
import { FilterList } from "./FilterList.styled"
import { FilterContext } from "@/context/FilterContext"
import { FilterType } from "@/app/types/filterTypes"

export const TypeFilter = () => {
  const { type, setType } = useContext(FilterContext)
  
  const IS_ALL = type === FilterType.ALL
  const IS_TSHIRT = type === FilterType.TSHIRT
  const IS_MUG = type === FilterType.MUG
  
  return(
    <FilterList>
      <FilterItem selected={IS_ALL} onClick={() => setType(FilterType.ALL)}>
          Todos os produtos
      </FilterItem>
      <FilterItem selected={IS_TSHIRT} onClick={() => setType(FilterType.TSHIRT)}>
          Camisetas
      </FilterItem>
      <FilterItem selected={IS_MUG} onClick={() => setType(FilterType.MUG)}>
          Canecas
      </FilterItem>
    </FilterList>
  )
}