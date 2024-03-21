"use client"
import { IoIosArrowDown } from "react-icons/io";
import { PriorityDropdownBtn } from "./PriorityDropdownBtn.styled";
import { PriorityDropdownContent } from "./PriorityDropdownContent";
import { PriorityDropdown } from "./PriorityDropdown.styled";
import { useState } from "react";

export const PriorityFilter = () => {
  const [displayContent, setDisplayContent] = useState(false) 

  const handleDisplayDropdownContent = () => {
    setDisplayContent(!displayContent)
  }
  
  return(
    <PriorityDropdown>
      <PriorityDropdownBtn 
        onClick={() => handleDisplayDropdownContent()}
        rotate={displayContent}
      >
        <p>Organizar por</p>
        <IoIosArrowDown size={16} />
      </PriorityDropdownBtn>
      <PriorityDropdownContent 
        isOpen={displayContent}
        setIsOpen={setDisplayContent} 
      />
    </PriorityDropdown>
  )
}