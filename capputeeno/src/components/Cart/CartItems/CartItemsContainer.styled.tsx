import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const CartItemsContainer = styled.section`
  width: 100%;
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--color-dark-two);

  @media ${mediaQueries.md} {
    width: 67%;
  }

  h3.title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 36px;
    text-transform: uppercase
  }

  div.total {
    font-size: 1rem;
    font-weight: 300;
    line-height: 24px;
    
    span.value {
      font-weight: 600;
    }
  }
`