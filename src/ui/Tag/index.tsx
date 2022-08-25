import { TagSelector, TagText } from "./subcomponents";

interface TagProps {
  text: string;
  active?: boolean;
}

const Tag = ({ active, text }: TagProps) => {
  return (
    <TagSelector $active={active}>
      <TagText>{text}</TagText>
    </TagSelector>
  );
};

export default Tag;
