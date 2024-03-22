import { MutableRefObject, useContext, useEffect, useRef } from "react"
import { PriorityItem } from "./PriorityItem.styled"
import { PriorityList } from "./PriorityList.styled"
import { FilterContext } from "@/context/FilterContext"
import { PriorityFilterType } from "@/types/filterTypes"

interface PriorityDropdownContentProps {
  isOpen: boolean
  setIsOpen: Function
  dropdownBtnRef: MutableRefObject<HTMLButtonElement | undefined>
}

export const PriorityDropdownContent = (
  { isOpen, setIsOpen, dropdownBtnRef }: PriorityDropdownContentProps
) => {

  const { setPriority } = useContext(FilterContext)
  const handleUpdatePriority = (value: PriorityFilterType) => {
    setPriority(value)
    setIsOpen(false)
  }

  const dropdownRef = useRef<HTMLDivElement>()

  const handleClickOutside = (event: MouseEvent) => {
    if(dropdownBtnRef.current?.contains(event.target as Node)) {
      return
    }
    if(!dropdownRef.current?.contains(event.target as Node)){
      setIsOpen(false)
      return
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return(
    <PriorityList hidden={ !isOpen } ref={dropdownRef}>
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