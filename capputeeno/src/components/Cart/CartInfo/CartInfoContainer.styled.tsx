import styled from "styled-components";
import { mediaQueries } from '@/utils/mediaQueries';

export const CartInfoContainer = styled.section`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 552px;
  height: 700px;
  background: white;
  color: var(--color-dark-two);
  padding: 16px 24px;

  @media ${mediaQueries.md} {
    width: 33%;
  }

  div.top-content {
    display: flex;
    flex-direction: column;
    
    h1.title {
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 30px;
    }

    div.total-text {
      display: flex;
      width: 100%;
      justify-content: space-between;
      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        &.total {
          font-weight: 600;
        }
      }
    }

    div.bar {
      height: 1px;
      width: 100%;
      background: var(--color-gray-one);
      margin: 8px 0px;
    }

    button {
      margin-top: 40px;
      text-transform: uppercase;
      background-color: #51B853;
      color: white;
      border-radius: 4px;
      padding: 12px 0;
      border: 0;
    }
  }
  
  div.bottom-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--color-dark-one);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    a {
      cursor: pointer;
      text-decoration: underline;
      text-transform: uppercase;
    }
  }

`