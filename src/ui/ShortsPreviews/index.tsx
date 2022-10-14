import VideoTitleText from "../Thumnailpreviews/VideoTitleText";
import VideoViews from "../Thumnailpreviews/VideoViews";
import { ReactComponent as ShortsHeader } from "./shortsheader.svg";
import {
  HeaderBox,
  HeaderTitle,
  ShortIcon,
  ShortsBody,
  ShortsLink,
  ShortsPreviewThumbnail,
} from "./subcomponents";

const ShortsPreviews = () => {
  return (
    <ShortsBody>
      <HeaderBox>
        <ShortIcon>
          <ShortsHeader></ShortsHeader>
        </ShortIcon>
        <HeaderTitle>Shorts</HeaderTitle>
      </HeaderBox>

      <ShortsLink>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/ofOgJ_F7s1E/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLCtQTCU3qk_a5h2jeIWHEM10zzTtA"
            alt=""
          />
          <VideoTitleText videotext="These two are constantly..." />

          <VideoViews viewstext="858k Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/yxrL32eFLHA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD4WR777K0Lluo0QSFfkR1u0dSBKQ"
            alt=""
          />
          <VideoTitleText videotext="How to keep up with web..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/u5-nBKULlts/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLC7pA3D4yqEjovT8-gmyiwmxpDuvg"
            alt=""
          />
          <VideoTitleText videotext="Lil Wayne forgot he's a good..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/NWGzAwqfOG4/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDX7DIlBP2SVP7jtcvqnU8XkyGhJw"
            alt=""
          />
          <VideoTitleText videotext="The Future of Programming..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/xfle2asha-g/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD8uUnmiczAbl5xH0pmykii-JrgQQ"
            alt=""
          />
          <VideoTitleText videotext="Free Soda (Tarkov)" />

          <VideoViews viewstext="1.8m Views" />
        </div>

        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/4VUaoUAaMQg/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLB3yuC8_TBjIUCL2kTBBboOU5-eQQ"
            alt=""
          />
          <VideoTitleText videotext="Someone sent me this VS Code..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/jlvwSorkdIo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDihmRhn9HjmHuFeDyr-yEvfhCgFA"
            alt=""
          />
          <VideoTitleText videotext="This Advanced Flexbox Trick Is..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/GmoEeMENUVA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLD3pYTiTYupZHtvthGXlHUWjtp1-g"
            alt=""
          />
          <VideoTitleText videotext="GOOD JOB TWITCH! 👏" />

          <VideoViews viewstext="1.8m Views" />
        </div>
        <div>
          <ShortsPreviewThumbnail
            src="https://i.ytimg.com/vi/MjtiyNu7YRg/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&amp;rs=AOn4CLDegWbxiI2qzbBYKkBxXF1X0t5TuQ"
            alt=""
          />
          <VideoTitleText videotext="Theo Von Gets EMBARRASSED..." />

          <VideoViews viewstext="1.8m Views" />
        </div>
      </ShortsLink>
    </ShortsBody>
  );
};

export default ShortsPreviews;
