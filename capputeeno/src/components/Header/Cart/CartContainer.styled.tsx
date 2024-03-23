import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const CartContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 30px;

  @media ${mediaQueries.sm} {
    position: inherit;
  }
`