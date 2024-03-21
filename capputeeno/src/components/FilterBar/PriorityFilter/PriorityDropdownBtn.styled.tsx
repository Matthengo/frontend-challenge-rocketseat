import { MutableRefObject } from "react";
import styled from "styled-components";

interface PriorityDropdownBtnProps {
  rotate: boolean;
  ref: MutableRefObject<HTMLButtonElement | undefined>
}

export const PriorityDropdownBtn = styled.button<PriorityDropdownBtnProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--color-dark-one);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  border: none;
  cursor: pointer;
  position: relative;
  svg {
    color: var(--color-dark-one);
    transition: all 0.3s ease-out;
    transform: ${props => props.rotate ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
  margin-bottom: 4px;
  
`