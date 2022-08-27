import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  overflow: hidden;
  flex: 1;
  flex-basis: 1e-9px;
  z-index: 1;
  overflow-y: auto;
  top: 68px;
  left: 0;
  position: fixed;
  bottom: 0;
  margin: 0;
  width: 240px;

  &::-webkit-scrollbar {
    background: transparent;
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #909090;
  }
`;

export const SidebarLinkContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
`;

interface SidebarLinkProps {
  $active?: boolean;
}

export const SidebarLink = styled.a<SidebarLinkProps>`
  color: #030303;
  font-size: 14px;
  height: 40px;
  line-height: 24px;
  text-decoration: none;

  ${({ $active }) => {
    if ($active) {
      return `
        ${SidebarLinkContent} {
          background-color: rgba(0, 0, 0, 0.1);
          font-weight: 500;
        }

        &:hover ${SidebarLinkContent} {
          background-color: rgba(0, 0, 0, 0.15);
        }
      `;
    } else {
      return `
        &:hover ${SidebarLinkContent} {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `;
    }
  }}
`;

export const SidebarLinkIcon = styled.div`
  height: 24px;
  width: 24px;
  padding: 8px;
  margin-right: 24px;
`;
