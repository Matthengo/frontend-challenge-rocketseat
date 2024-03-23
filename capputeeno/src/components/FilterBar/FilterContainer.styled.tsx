import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  @media ${mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`