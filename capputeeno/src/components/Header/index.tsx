"use client"

import { TagHeader } from "./TagHeader.styled"
import { Logo } from "./Logo.styled"
import { Saira_Stencil_One } from "next/font/google";
import { SearchInput } from "./SearchInput";
import { Cart } from "./Cart";
import { useContext } from "react";
import { FilterContext } from "@/context/FilterContext";

const sairaStencilOne = Saira_Stencil_One({ 
  subsets: ["latin"],
  weight: ['400']
});

export const Header = () => {
  const { setSearch, search } = useContext(FilterContext)
  
  return(
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div className="header-right-content">
        <SearchInput 
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <Cart />
      </div>
    </TagHeader>
  )
}
