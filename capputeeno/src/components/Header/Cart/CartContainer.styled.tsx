import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media ${mediaQueries.sm} {
    position: inherit;
  }
`