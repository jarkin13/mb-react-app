import { ShortsViewsText } from "./subcomponents";

interface ShortsViewsProp {
  shortsviewstext: string;
}

const ShortsViews = ({ shortsviewstext }: ShortsViewsProp) => {
  return <ShortsViewsText>{shortsviewstext}</ShortsViewsText>;
};

export default ShortsViews;
