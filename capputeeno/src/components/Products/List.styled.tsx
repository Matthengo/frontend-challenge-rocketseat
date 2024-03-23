import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 146px);
  grid-gap: 8px;
  max-width: 100%;
  margin-top: 32px;

  @media ${mediaQueries.md} {
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
  }
`