import {
  ButtonsAll,
  ButtonsIconsStyle,
  ButtonText,
  ClipButton,
  DisLikesButton,
  LikesButton,
  ReportButton,
  SaveButton,
  ShareButton,
  SubscribeButton,
  SubscribeText,
  TopLevelButtons,
} from "./subcomponents.";
import { ReactComponent as LikesIcon } from "./VideoButtonsIcons/likesbutton.svg";
import { ReactComponent as DisLikesIcon } from "./VideoButtonsIcons/dislikesbutton.svg";
import { ReactComponent as ShareIcon } from "./VideoButtonsIcons/sharebutton.svg";
import { ReactComponent as ClipIcon } from "./VideoButtonsIcons/clipbutton.svg";
import { ReactComponent as SaveIcon } from "./VideoButtonsIcons/savebutton.svg";
import { ReactComponent as ReportIcon } from "./VideoButtonsIcons/reportbutton.svg";
import { useState } from "react";

const VideoButtons = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    //Subscribe states its received function here
  }

  function likeCounter() {
    setCount(count + 1);
  }

  return (
    <ButtonsAll>
      <TopLevelButtons>
        <LikesButton>
          <ButtonsIconsStyle>
            <LikesIcon />
          </ButtonsIconsStyle>
          <ButtonText onClick={likeCounter}>{count}</ButtonText>
        </LikesButton>
        <DisLikesButton>
          <ButtonsIconsStyle>
            <DisLikesIcon />
          </ButtonsIconsStyle>
          <ButtonText>DISLIKE</ButtonText>
        </DisLikesButton>
        <ShareButton>
          <ButtonsIconsStyle>
            <ShareIcon />
          </ButtonsIconsStyle>
          <ButtonText>SHARE</ButtonText>
        </ShareButton>
        <ClipButton>
          <ButtonsIconsStyle>
            <ClipIcon />
          </ButtonsIconsStyle>
          <ButtonText>CLIP</ButtonText>
        </ClipButton>
        <SaveButton>
          <ButtonsIconsStyle>
            <SaveIcon />
          </ButtonsIconsStyle>
          <ButtonText>SAVE</ButtonText>
        </SaveButton>
        <ReportButton>
          <ButtonsIconsStyle>
            <ReportIcon />
          </ButtonsIconsStyle>
        </ReportButton>
      </TopLevelButtons>
      <SubscribeButton>
        <SubscribeText onClick={handleClick}>SUBSCRIBE</SubscribeText>
      </SubscribeButton>
    </ButtonsAll>
  );
};

export default VideoButtons;
