import styled from "styled-components";

export const TagInput = styled.input`
  width: 100%;
  padding: 10px 46px 10px 16px;
  background-color: var(--input-bg-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-dark-one);
  border-radius: 8px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`