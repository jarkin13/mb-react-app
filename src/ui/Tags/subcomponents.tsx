import styled from "styled-components/macro";

const FilterBar = styled.div`
  position: fixed;
  background-color: #fff;
  top: 56px;
  left: 264px;
  max-height: 56px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
  border-right: none;
`;

export default FilterBar;

export const Border = styled.div``;
