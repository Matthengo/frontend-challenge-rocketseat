import styled from "styled-components";

interface PaginationItemBtnProps {
  selected: boolean
}

export const PaginationItemBtn = styled.button<PaginationItemBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.selected ? '1px solid var(--color-orange-one)' : 'none'};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${
    props => props.selected ? 'var(--page-bg-color)' : 'var(--color-bg-gray-btn)' 
  };
  color: ${
    props => props.selected ? 'var(--color-orange-one)' : 'var(--color-dark-one)'
  };
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`