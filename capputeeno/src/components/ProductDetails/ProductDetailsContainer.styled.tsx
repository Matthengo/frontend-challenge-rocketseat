import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const ProductDetailsContainer = styled.section`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 12px;
  color: var(--color-dark-two);
  flex-direction: column;

  img {
    width: 100%;
  }

  p.category {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
  }

  h2.title {
    font-size: 2rem;
    font-weight: 300;
    line-height: 48px;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  p.price {
    color: var(--color-dark-three);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 24px;
  }

  p.fee {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 58px;
  }

  p.description-title {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--color-dark-one);
    margin-bottom: 8px;
  }

  p.description-text {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 12px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${mediaQueries.lg} {
    flex-direction: row;
    gap: 32px;
    
    img {
      width: 50%;
      max-width: 840px;
    }
  }
`