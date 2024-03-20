import { TagInput } from "./TagInput.styled"
import { InputContainer } from "./InputContainer.styled"
import { CiSearch } from "react-icons/ci";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = (props: InputProps) => {
  return(
    <InputContainer>
      <TagInput {...props} />
      <CiSearch size={24} />
    </InputContainer>
  )
}