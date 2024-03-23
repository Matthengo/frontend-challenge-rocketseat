import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const Logo = styled.a`
  color: var(--logo-color);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 60px;

  @media ${mediaQueries.sm} {
    font-size: 2.5rem
  }
`