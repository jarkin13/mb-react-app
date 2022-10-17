import styled, { css } from "styled-components/macro";

export const TopLevelButtons = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 80px;
  max-width: 484.83px;
  margin-left: 600px;
`;

export const LikesButton = styled.button`
  height: 36px;
  border: none;
  background: white;
  width: 72.66px;
  cursor: pointer;
`;
export const DisLikesButton = styled.button`
  height: 36px;
  background: white;
  border: none;
  width: 95.33px;
  cursor: pointer;
`;
export const ShareButton = styled.button`
  height: 36px;
  background: white;
  border: none;
  width: 89px;
  cursor: pointer;
`;
export const ClipButton = styled.button`
  height: 36px;
  background: white;
  border: none;
  width: auto;
  width: 73.63px;
  cursor: pointer;
`;
export const SaveButton = styled.button`
  height: 36px;
  background: white;
  border: none;
  width: auto;
  width: 78.22px;
  cursor: pointer;
`;
export const ReportButton = styled.button`
  height: 36px;
  background: white;
  border: none;
  width: auto;
  cursor: pointer;
`;
export const SubscribeButton = styled.button`
  height: 36px;
  width: 109.94px;
  background: #cc0000;
  border: none;
  align-content: center:
  border-radius: 12px;
  margin-left: 800px;
  cursor: pointer;
`;
export const ButtonsIconsStyle = styled.div`
  height: 24px;
  width: 24px;
  margin-right: 68px;
`;

export const ButtonText = styled.p`
  margin-top: -20px;
  padding-left: 30px;
  font-size: 14px;
  font-family: roboto, sans-serif;
  font-weight: 500;
  letter-spacing: 0.5;
`;

export const SubscribeText = styled.p`
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5;
`;

export const ButtonsAll = styled.div`
  height: 36px;
  margin-left: 215px;
  padding-top: 32px;
`;
