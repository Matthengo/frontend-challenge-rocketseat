import styled from "styled-components";

interface PriorityListProps {
  hidden: boolean
}

export const PriorityList = styled.div<PriorityListProps>`
  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  padding: 12px 16px;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  right: 0;
  box-shadow: 0px 4px 12px 0px #0000001A;
  display: ${props => props.hidden ? 'none' : 'block'};
`