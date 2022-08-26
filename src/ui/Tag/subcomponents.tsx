import styled, { css } from "styled-components/macro";
import { findConfigFile } from "typescript";

const activeTagStyles = css`
background-color: #030303
  border-color: #030303
  color: #fff;
`;

interface TagSelectorProps {
  $active?: boolean;
}

export const TagSelector = styled.div<TagSelectorProps>`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
  height: 32px;
  padding: 0px 12px;
  border-radius: 16px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  display: inline-flex;
  flex-wrap: nowrap;
  margin-right: 10px;

 
  }

  ${({ $active }) => {
    if ($active) {
      return activeTagStyles;
    } else {
      return `
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      `;
    }
  }}
`;

export const TagText = styled.p`
  white-space: nowrap;
`;
