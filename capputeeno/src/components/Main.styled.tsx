import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 10px;
  min-height: 100vh;
  background-color: var(--page-bg-color);

  @media ${mediaQueries.sm} {
   padding: 34px 40px; 
  }

  @media ${mediaQueries.xl} {
    padding: 34px 160px;
  }
`