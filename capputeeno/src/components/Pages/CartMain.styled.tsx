import styled from "styled-components";
import { HomeMain } from "./HomeMain.styled";

export const CartMain = styled(HomeMain)`
  width: 100%;
  align-items: flex-start;

  > div {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
  }
`