import { Name } from "./subcomponents";

interface YoutuberNameProps {
  text: string;
}

const YoutuberName = ({ text }: YoutuberNameProps) => {
  return <Name>{text}</Name>;
};

export default YoutuberName;
