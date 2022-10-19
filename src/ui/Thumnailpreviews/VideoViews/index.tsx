import { Views } from "./subomponents";

interface VideoViewProps {
  viewstext: string;
}
const VideoViews = ({ viewstext }: VideoViewProps) => {
  return <Views>{viewstext}</Views>;
};

export default VideoViews;
