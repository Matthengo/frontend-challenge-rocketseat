import styled from "styled-components";

interface FilterItemProps {
  selected: boolean
}

export const FilterItem = styled.li<FilterItemProps>`
  font-size: 1rem;
  font-weight: ${props => props.selected ? '600' : '400'};
  line-height: 22px;
  text-transform: uppercase;
  color: ${props => props.selected ? 'var(--color-dark-two)' : 'var(--color-dark-one)'};
  border-bottom: ${props => props.selected ? '4px solid var(--color-orange-one)' : ''};
  cursor: pointer;
`