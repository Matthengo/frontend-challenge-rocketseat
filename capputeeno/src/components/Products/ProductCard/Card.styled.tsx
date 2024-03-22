import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #FFFFFF66;
  overflow: hidden;

  img {
    width: 256px;
    height: 300px;
    object-fit: cover;
    
  }

  div.info-content {
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

`