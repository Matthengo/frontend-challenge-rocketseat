import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 32px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  color: var(--color-dark-two);

  img {
    min-width: 256px;
    height: 211px;
    object-fit: cover;
  }

  div.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 16px 0;
    width: 100%;
    height: 211px;

    > div {
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        h1 {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 30px;
        }
        
        svg {
          color: var(--color-red-one)
        }
      }
    }

    p.description {
      margin: 12px 0;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 18px;
    }

    div.footer {
      display: flex;
      justify-content: space-between;
      align-items: end;

      p {
        font-size: 1rem;
        font-weight: 600;
        line-height: 24px;
      }

      select {
        border: 1px solid #A8A8B3;
        width: 65px;
        height: 40px;
        border-radius: 8px;
        background-color: #F3F5F6;
        padding-left: 12px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        color: #737380;
      }
    }
  }
`