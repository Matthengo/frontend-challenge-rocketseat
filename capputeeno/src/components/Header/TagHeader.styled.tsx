import styled from "styled-components";
import { mediaQueries } from "@/utils/mediaQueries";

export const TagHeader = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 10px 20px;

  div.header-right-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%
  }

  @media ${mediaQueries.sm} {
    flex-direction: row;
    padding: 20px 40px;
    align-items: center;
    justify-content: space-between;
  }

  @media ${mediaQueries.lg} {
    padding: 20px 160px;

    div.header-right-content {
      width: auto
    }
  }

`