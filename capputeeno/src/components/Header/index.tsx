"use client"

import { TagHeader } from "./TagHeader.styled"
import { Logo } from "./Logo.styled"
import { Saira_Stencil_One } from "next/font/google";
import { SearchInput } from "./SearchInput";

const sairaStencilOne = Saira_Stencil_One({ 
  subsets: ["latin"],
  weight: ['400']
});

export const Header = () => {
  return(
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <SearchInput placeholder="Procurando por algo específico?" />
      </div>
    </TagHeader>
  )
}
