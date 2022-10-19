import { ShortTitleStyle } from "./subcomponents";

interface ShortsTitleProps {
  shortstext: string;
}

const ShortsTitle = ({ shortstext }: ShortsTitleProps) => {
  return <ShortTitleStyle>{shortstext}</ShortTitleStyle>;
};

export default ShortsTitle;
