import { mediaQueries } from "@/utils/mediaQueries";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  svg {
    color: var(--color-dark-one);
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media ${mediaQueries.md} {
    width: 352px
  }
`