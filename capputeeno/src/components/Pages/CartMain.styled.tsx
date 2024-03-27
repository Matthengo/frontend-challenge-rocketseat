import styled from "styled-components";
import { HomeMain } from "./HomeMain.styled";
import { mediaQueries } from "@/utils/mediaQueries";

export const CartMain = styled(HomeMain)`
  width: 100%;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 32px;

    @media ${mediaQueries.md} {
      flex-direction: row;
    }
  }
`