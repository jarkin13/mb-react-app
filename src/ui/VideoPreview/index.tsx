import { useState } from "react";
import YoutuberName from "../YoutuberName";
import VideoTitleText from "../VideoTitleText";
import "./index.css";
import { ReactComponent as VerifiedIcon } from "./Verified.svg";
import { VideoLink, YoutuberIcon, VerifiedStyle } from "./subcomponents";

const VideoPreview = () => {
  const [verified, setVerified] = useState(false);
  return (
    <VideoLink>
      <div>
        <img
          src="https://i.ytimg.com/vi/kliQq9UDBtM/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLAO8eIZXkKvbqzLlJju9x6PYIqtpA"
          alt=""
        ></img>
        <YoutuberIcon
          src="https://yt3.ggpht.com/ytc/AMLnZu8VcQgI4mTUuYB6idER20SqI4vJU4Hq0RnmCLC1QA=s68-c-k-c0x00ffffff-no-rj"
          alt="Emergency Awesome"
        ></YoutuberIcon>
        <VideoTitleText videotext="House Of The Dragon Episode 8 FULL Breakdown..." />
        <div className="changestyle">
          <YoutuberName text="Emergency Awesome" />
          <VerifiedStyle>
            <VerifiedIcon />
          </VerifiedStyle>
        </div>
      </div>
      <div>
        <img
          src="https://i.ytimg.com/vi/CWsQlXr4UW0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBx-68AKpmE7Chg39xLG2pszOYxwQ"
          alt="r"
        ></img>
        <YoutuberIcon
          src="https://yt3.ggpht.com/ytc/AMLnZu8wdugMCyIZC-hd7mZ7kVoiEzWUGeNWG2HrLOUoXQ=s68-c-k-c0x00ffffff-no-rj"
          alt="Bert Kreische"
        />
        <VideoTitleText videotext="Somethings Burning - Jim Jefferies & Forrest Shaw..." />
        <div className="changestyle">
          <YoutuberName text="Bert Kreischer" />
          <VerifiedStyle>
            <VerifiedIcon />
          </VerifiedStyle>
        </div>
      </div>
      <div>
        <img
          src="https://i.ytimg.com/vi/sJ_K2nDF5RU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCprkYSZCo3NfDP-n0WtLQSyHIxXQ"
          alt="Video 3"
        ></img>
        <YoutuberIcon
          src="https://yt3.ggpht.com/xQdi_ChyFhrmWRtz3MJ43K7O6yuqfFUp2P6iRLrKqCKpaJ8ckS9vPlyaQw0qpJ2hH0FOuus3=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <VideoTitleText videotext="Arsonist Speedy Can Shoot Now! - Among Us Proximity..." />
        <div className="changestyle">
          <YoutuberName text="KYRSP33DY" />

          <VerifiedStyle>
            <VerifiedIcon />
          </VerifiedStyle>
        </div>
      </div>
      <div>
        <img
          src="https://i.ytimg.com/vi/8vOUnywZxrs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB1tZgFSnn57eTJq-tHJd19IiWzoQ"
          alt="Video 4"
        ></img>
        <YoutuberIcon
          src="https://yt3.ggpht.com/ytc/AMLnZu8qTfXsuv-QDLtG6DxlvToMgip1zrfHf5hl4KNw3w=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <VideoTitleText videotext="Latinos Make No Sense... | Andrew Schulz | Stand Up..." />
        <div className="changestyle">
          <YoutuberName text="The Andrew Schulz" />

          <VerifiedStyle>
            <VerifiedIcon />
          </VerifiedStyle>
        </div>
      </div>
      <div>
        <img
          src="https://i.ytimg.com/vi/UPpkk3lys3Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAYMxdlTGlSIdKJI30vfiP6HLL1HQ"
          alt=""
        ></img>
        <YoutuberIcon
          src="https://yt3.ggpht.com/LY-S4Zokfihm1nVEemvMLfgRMJlarN-Mzkv2hTKwv3a0xT7uQZANT99_1Q-1HCWletMG-laV8A=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <VideoTitleText videotext="Ive Never had more fun LYING to my friends..." />
        <div className="changestyle">
          <YoutuberName text="WILDCAT" />
          <VerifiedStyle>
            <VerifiedIcon />
          </VerifiedStyle>
        </div>
      </div>
    </VideoLink>
  );
};

export default VideoPreview;
