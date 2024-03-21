import { useContext } from "react"
import { PriorityItem } from "./PriorityItem.styled"
import { PriorityList } from "./PriorityList.styled"
import { FilterContext } from "@/context/FilterContext"
import { PriorityFilterType } from "@/app/types/filterTypes"

interface PriorityDropdownContentProps {
  isOpen: boolean
  setIsOpen: Function
}

export const PriorityDropdownContent = (
  { isOpen, setIsOpen }: PriorityDropdownContentProps
) => {

  const { setPriority } = useContext(FilterContext)
  const handleUpdatePriority = (value: PriorityFilterType) => {
    setPriority(value)
    setIsOpen(false)
  }


  return(
    <PriorityList hidden={ !isOpen }>
      <PriorityItem 
        onClick={() => handleUpdatePriority(PriorityFilterType.NEW)}
      >
          Novidades
      </PriorityItem>
      <PriorityItem 
        onClick={() => handleUpdatePriority(PriorityFilterType.HIGHTESTPRICE)}
      >
          Preço: Maior - menor
      </PriorityItem>
      <PriorityItem 
        onClick={() => handleUpdatePriority(PriorityFilterType.LOWESTPRICE)}
      >
          Preço: Menor - maior
      </PriorityItem>
      <PriorityItem 
        onClick={() => handleUpdatePriority(PriorityFilterType.BESTSELLERS)}
      >
          Mais vendidos
      </PriorityItem>
    </PriorityList>
  )
}