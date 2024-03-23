import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean
}

export const FilterItem = styled.button<FilterItemProps>`
  font-size: 0.875rem;
  font-weight: ${props => props.selected ? '600' : '400'};
  line-height: 18px;
  text-transform: uppercase;
  color: ${props => props.selected ? 'var(--color-dark-two)' : 'var(--color-dark-one)'};
  border: none;
  border-bottom: ${props => props.selected ? '4px solid var(--color-orange-one)' : ''};
  cursor: pointer;

  @media ${mediaQueries.sm} {
    line-height: 22px;
    font-size: 1rem;
  }
`