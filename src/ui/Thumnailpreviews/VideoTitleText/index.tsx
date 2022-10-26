import {
  Name,
  TimeSincePosted,
  VideoPreviewThumbnail,
  Views,
  ViewsDivider,
  YoutuberIcon,
  VideoTitleStyle,
  DisplayAll,
  Content,
  ShortsPreviewThumbnail,
  ShortsContent,
  ViewsContent,
} from "./subcomponents";

interface VideoTitleProps {
  videoTitle: string;
  viewsText: string;
  youtuberIcon?: any;
  videoThumbnail: any;
  timeAgoPosted?: string;
  youtuberName: string;
}

const VideoTitleText = ({
  viewsText,
  youtuberName,
  videoThumbnail,
  videoTitle,
  youtuberIcon,
  timeAgoPosted,
}: VideoTitleProps) => {
  return (
    <DisplayAll>
      <div>
        {timeAgoPosted === "" ? (
          <ShortsContent>
            <ShortsPreviewThumbnail src={videoThumbnail} alt={youtuberName} />
          </ShortsContent>
        ) : (
          <VideoPreviewThumbnail src={videoThumbnail} alt={youtuberName} />
        )}
      </div>
      <div>
        {timeAgoPosted === "" ? undefined : (
          <YoutuberIcon src={youtuberIcon} alt={youtuberName} />
        )}
      </div>
      <Content>
        <VideoTitleStyle>{videoTitle}</VideoTitleStyle>
        <Name>{timeAgoPosted === "" ? "" : youtuberName}</Name>
        <Views>
          {timeAgoPosted === "" ? (
            <ViewsContent>{viewsText} Views</ViewsContent>
          ) : (
            <div>{viewsText} Views</div>
          )}
        </Views>
        {timeAgoPosted === "" ? (
          <ViewsDivider></ViewsDivider>
        ) : (
          <ViewsDivider>-</ViewsDivider>
        )}
        <TimeSincePosted>
          {timeAgoPosted === "" ? (
            <ShortsContent></ShortsContent>
          ) : (
            timeAgoPosted
          )}
        </TimeSincePosted>
      </Content>
    </DisplayAll>
  );
};

export default VideoTitleText;
