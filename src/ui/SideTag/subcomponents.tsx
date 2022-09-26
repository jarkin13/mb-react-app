import styled, { css } from "styled-components/macro";
interface SidebarSelectorProps {
  $active?: boolean;
}

const activeSidebarStyles = css`
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.2);
  padding-left: 74px;
  height: 40px;
  width: 240px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SidebarSelector = styled.div<SidebarSelectorProps>`
  ${({ $active }) => {
    if ($active) {
      return activeSidebarStyles;
    } else {
      return `
      padding-left: 74px;
      height: 40px;
      width: 166px;
      margin: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      }`;
    }
  }}
`;

export const SideText = styled.p`
  white-space: nowrap;
`;
