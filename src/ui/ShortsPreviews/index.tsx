import ShortsTitle from "../ShortsTitle";
import ShortsViews from "../ShortsViews";
import { ReactComponent as ShortsHeader } from "./shortsheader.svg";
import { ReactComponent as NotInterested } from "./notinterested.svg";
import { ReactComponent as ShortShowMore } from "./shortShowMore.svg";
import {
  HeaderBox,
  HeaderTitle,
  Notinterestedstyle,
  ShortIcon,
  ShortsLink,
  ShortsPreviewThumbnail,
  ShortsVideos,
  ShowMoreButton,
  ShowMorestyle,
} from "./subcomponents";
import { useState } from "react";

const ShortsPreviews = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <HeaderBox>
        <ShortIcon>
          <ShortsHeader></ShortsHeader>
        </ShortIcon>
        <Notinterestedstyle>
          <NotInterested />
        </Notinterestedstyle>
        <HeaderTitle>Shorts</HeaderTitle>
      </HeaderBox>

      <ShortsLink>
        <ShortsVideos>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ShortsPreviewThumbnail
              src="https://i.ytimg.com/vi/ofOgJ_F7s1E/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLCtQTCU3qk_a5h2jeIWHEM10zzTtA"
              alt=""
            />
          </div>
          {isHovering && (
            <ShortsTitle shortstext="These two are constantly..." />
          )}
          <ShortsTitle shortstext="These two are constantly..." />

          <ShortsViews shortsviewstext="858k views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/yxrL32eFLHA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD4WR777K0Lluo0QSFfkR1u0dSBKQ"
            alt=""
          />

          <ShortsTitle shortstext="How to keep up with web..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/u5-nBKULlts/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLC7pA3D4yqEjovT8-gmyiwmxpDuvg"
            alt=""
          />

          <ShortsTitle shortstext="Lil Wayne forgot he's a good..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/NWGzAwqfOG4/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDX7DIlBP2SVP7jtcvqnU8XkyGhJw"
            alt=""
          />

          <ShortsTitle shortstext="The Future of Programming..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/xfle2asha-g/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD8uUnmiczAbl5xH0pmykii-JrgQQ"
            alt=""
          />

          <ShortsTitle shortstext="Free Soda (Tarkov)" />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/4VUaoUAaMQg/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLB3yuC8_TBjIUCL2kTBBboOU5-eQQ"
            alt=""
          />

          <ShortsTitle shortstext="Someone sent me this VS Code..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/jlvwSorkdIo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDihmRhn9HjmHuFeDyr-yEvfhCgFA"
            alt=""
          />

          <ShortsTitle shortstext="This Advanced Flexbox Trick Is..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/GmoEeMENUVA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD3pYTiTYupZHtvthGXlHUWjtp1-g"
            alt=""
          />

          <ShortsTitle shortstext="GOOD JOB TWITCH! 👏" />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
        <ShortsVideos>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/MjtiyNu7YRg/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDegWbxiI2qzbBYKkBxXF1X0t5TuQ"
            alt=""
          />

          <ShortsTitle shortstext="Theo Von Gets EMBARRASSED..." />

          <ShortsViews shortsviewstext="1.8m views" />
        </ShortsVideos>
      </ShortsLink>
      <ShowMoreButton>
        <ShowMorestyle>
          <ShortShowMore />
        </ShowMorestyle>
      </ShowMoreButton>
    </div>
  );
};

export default ShortsPreviews;
