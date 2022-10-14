import { VideoTitleStyle } from "./subcomponents";

interface VideoTitleProps {
  videotext: string;
}
const VideoTitleText = ({ videotext }: VideoTitleProps) => {
  return <VideoTitleStyle>{videotext}</VideoTitleStyle>;
};

export default VideoTitleText;
