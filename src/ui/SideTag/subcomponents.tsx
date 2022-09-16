import styled, { css } from "styled-components/macro";
interface SidebarSelectorProps {
  $active?: boolean;
}

const activeSidebarStyles = css`
background-color: #030303
border-color: #030303
color: #fff;
`;

export const SidebarSelector = styled.div<SidebarSelectorProps>`
  ${({ $active }) => {
    if ($active) {
      return activeSidebarStyles;
    } else {
      return `
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      }`;
    }
  }}
`;

export const SideText = styled.p`
  white-space: nowrap;
`;
