import { useContext } from "react"
import { FilterItem } from "./FilterItem.styled"
import { FilterList } from "./FilterList.styled"
import { FilterContext } from "@/context/FilterContext"
import { FilterType } from "@/app/types/filterTypes"
import { FilterItemBtn } from "./FIlterItemBtn.styled"

export const TypeFilter = () => {
  const { type, setType } = useContext(FilterContext)
  
  const IS_ALL = type === FilterType.ALL
  const IS_TSHIRT = type === FilterType.TSHIRT
  const IS_MUG = type === FilterType.MUG
  
  return(
    <FilterList>
      <FilterItem selected={IS_ALL}>
        <FilterItemBtn onClick={() => setType(FilterType.ALL)}>
          Todos os produtos
        </FilterItemBtn>
      </FilterItem>
      <FilterItem selected={IS_TSHIRT}>
        <FilterItemBtn onClick={() => setType(FilterType.TSHIRT)}>
          Camisetas
        </FilterItemBtn>
      </FilterItem>
      <FilterItem selected={IS_MUG}>
        <FilterItemBtn onClick={() => setType(FilterType.MUG)}>
          Canecas
        </FilterItemBtn>
      </FilterItem>
    </FilterList>
  )
}