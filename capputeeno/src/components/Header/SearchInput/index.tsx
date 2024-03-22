import { TagInput } from "./TagInput.styled"
import { InputContainer } from "./InputContainer.styled"
import { CiSearch } from "react-icons/ci";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void,
}

export const SearchInput = (props: InputProps) => {
  return(
    <InputContainer>
      <TagInput onChange={(e) => props.handleChange(e.target.value)} {...props} />
      <CiSearch size={24} />
    </InputContainer>
  )
}