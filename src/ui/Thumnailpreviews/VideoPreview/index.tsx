import { useState } from "react";
import VideoViews from "../VideoViews";
import YoutuberName from "../YoutuberName";
import VideoTitleText from "../VideoTitleText";
import { ReactComponent as VerifiedIcon } from "./Verified.svg";
import {
  VideoLink,
  YoutuberIcon,
  VerifiedStyle,
  SecondVideoLink,
  ViewsDivider,
  TimeSincePosted,
  ViewsandTimeBar,
  VideoBody,
  VideoPreviewThumbnail,
  ChangeStyle,
} from "./subcomponents";

const VideoPreview = () => {
  const [verified, setVerified] = useState(false);
  return (
    <VideoBody>
      <VideoLink>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/kliQq9UDBtM/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLAO8eIZXkKvbqzLlJju9x6PYIqtpA"
            alt=""
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu8VcQgI4mTUuYB6idER20SqI4vJU4Hq0RnmCLC1QA=s68-c-k-c0x00ffffff-no-rj"
            alt="Emergency Awesome"
          ></YoutuberIcon>
          <VideoTitleText videotext="House Of The Dragon Episode 8 FULL Breakdown..." />
          <ChangeStyle>
            <YoutuberName text="Emergency Awesome" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="858k Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/CWsQlXr4UW0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBx-68AKpmE7Chg39xLG2pszOYxwQ"
            alt="r"
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu8wdugMCyIZC-hd7mZ7kVoiEzWUGeNWG2HrLOUoXQ=s68-c-k-c0x00ffffff-no-rj"
            alt="Bert Kreische"
          />
          <VideoTitleText videotext="Somethings Burning - Jim Jefferies & Forrest Shaw..." />
          <ChangeStyle>
            <YoutuberName text="Bert Kreischer" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/sJ_K2nDF5RU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCprkYSZCo3NfDP-n0WtLQSyHIxXQ"
            alt="Video 3"
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/xQdi_ChyFhrmWRtz3MJ43K7O6yuqfFUp2P6iRLrKqCKpaJ8ckS9vPlyaQw0qpJ2hH0FOuus3=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="Arsonist Speedy Can Shoot Now! - Among Us Proximity..." />
          <ChangeStyle>
            <YoutuberName text="KYRSP33DY" />

            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/8vOUnywZxrs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB1tZgFSnn57eTJq-tHJd19IiWzoQ"
            alt="Video 4"
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu8qTfXsuv-QDLtG6DxlvToMgip1zrfHf5hl4KNw3w=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="Latinos Make No Sense... | Andrew Schulz | Stand Up..." />
          <ChangeStyle>
            <YoutuberName text="The Andrew Schulz" />

            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/UPpkk3lys3Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAYMxdlTGlSIdKJI30vfiP6HLL1HQ"
            alt=""
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/LY-S4Zokfihm1nVEemvMLfgRMJlarN-Mzkv2hTKwv3a0xT7uQZANT99_1Q-1HCWletMG-laV8A=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="Ive Never had more fun LYING to my friends..." />
          <ChangeStyle>
            <YoutuberName text="WILDCAT" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
      </VideoLink>

      <SecondVideoLink>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/U7itlR6qESM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&amp;rs=AOn4CLDy5x6WMFZw6NulO3vsfPRnywxWzA"
            alt=""
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu8t-B0GQmkMnHoxqlEv78fWiS4hTMUe8wELLwYvvA=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          ></YoutuberIcon>
          <VideoTitleText videotext="6 things I wish I knew about CSS when I started" />
          <ChangeStyle>
            <YoutuberName text="Kevin Powell" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/n2B-FClr5rA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA3TYVcG9Brw5Hum4BywjDtWphuEg"
            alt=""
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/avdsle4t42vMMUPALsh5wi5yD8CE2-ELOhwVjjd08OL1hUBobYaR1WhwACXjAdXe-VoESDwZ=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="5 Coding Projects (from beginner to advanced)" />
          <ChangeStyle>
            <YoutuberName text="ForrestKnight" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/COXHiFqMVA4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDYZ8l8CONlFBhljBkq1JwzsQdTIQ"
            alt="Video 3"
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu9Yd2bvvU2qXAC5j0Iu7R10CN0nton-Q44LMfSZoQ=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="RAPPER REACTS to EMINEM DISS | Eminem - The Sauce" />
          <ChangeStyle>
            <YoutuberName text="Crypt" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/lUzpK0tGFcE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDCshMztgVuiLJ1skwLvxlNrcMy2A"
            alt="Video 4"
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="The MrBeast MEGA-STUDIO Tour!" />
          <ChangeStyle>
            <YoutuberName text="Mrwhosetheboss" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
        <div>
          <VideoPreviewThumbnail
            src="https://i.ytimg.com/vi/264kafgePio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAnCpfMUXO6L-znnbBn4mH-jEEhOw"
            alt=""
          />
          <YoutuberIcon
            src="https://yt3.ggpht.com/ytc/AMLnZu8DeRF1AWLlRnKZmQQWlrC6mCzdpZMnnJWbAN2tPA=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <VideoTitleText videotext="The Impractical Jokers Play Truth or Dab | Hot Ones" />
          <ChangeStyle>
            <YoutuberName text="First We Feast" />
            <VerifiedStyle>
              <VerifiedIcon />
            </VerifiedStyle>
          </ChangeStyle>
          <ViewsandTimeBar>
            <VideoViews viewstext="1.8m Views" />
            <ViewsDivider>•</ViewsDivider>
            <TimeSincePosted>3 Hours ago</TimeSincePosted>
          </ViewsandTimeBar>
        </div>
      </SecondVideoLink>
    </VideoBody>
  );
};

export default VideoPreview;
