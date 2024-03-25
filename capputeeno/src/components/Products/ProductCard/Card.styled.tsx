import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: #FFFFFF66;
  overflow: hidden;
  cursor: pointer;
  border: none;
  font-family: inherit;

  img {
    width: 146px;
    height: 200px;
    object-fit: cover;
    
  }

  div.info-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 12px;
    width: 100%;

    h3.title {
      font-size: 1rem;
      font-weight: 300;
      line-height: 24px;
      color: var(--color-dark-two)
    }

    p.price {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 21px;
      color: var(--color-dark-three)
    }

    div.bar {
      height: 1px;
      width: 100%;
      background: var(--color-gray-one);
      margin: 8px 0px;
    }
  }

  @media ${mediaQueries.md} {
    img {
      width: 256px;
      height: 300px; 
    }
  }

`