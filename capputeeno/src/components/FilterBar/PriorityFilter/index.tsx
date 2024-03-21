"use client"
import { IoIosArrowDown } from "react-icons/io";
import { PriorityDropdownBtn } from "./PriorityDropdownBtn.styled";
import { PriorityDropdownContent } from "./PriorityDropdownContent";
import { PriorityDropdown } from "./PriorityDropdown.styled";
import { useRef, useState } from "react";

export const PriorityFilter = () => {
  const [displayContent, setDisplayContent] = useState(false) 

  const handleDisplayDropdownContent = () => {
    setDisplayContent(!displayContent)
  }
  
  const dropdownBtnRef = useRef<HTMLButtonElement>()

  return(
    <PriorityDropdown>
      <PriorityDropdownBtn
        ref={dropdownBtnRef}
        onClick={() => handleDisplayDropdownContent()}
        rotate={displayContent}
      >
        <p>Organizar por</p>
        <IoIosArrowDown size={16} />
      </PriorityDropdownBtn>
      <PriorityDropdownContent
        dropdownBtnRef={dropdownBtnRef}
        isOpen={displayContent}
        setIsOpen={setDisplayContent} 
      />
    </PriorityDropdown>
  )
}