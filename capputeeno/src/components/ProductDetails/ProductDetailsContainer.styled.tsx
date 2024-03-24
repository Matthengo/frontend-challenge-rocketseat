import styled from "styled-components";

export const ProductDetailsContainer = styled.section`
  display: flex;
  width: 100%;
  gap: 32px;
  color: var(--color-dark-two);

  img {
    width: 50%;
    max-width: 640px;
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
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`