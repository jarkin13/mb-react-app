import Tag from "./ui/Tag";
import "./App.css";

interface TagsProps {
  text: string;
}

const Tags = ({ text }: TagsProps) => {
  return (
    <div>
      <Tag text="All" />
      <Tag text="Live" />
      <Tag text="Music" />
      <Tag text="Gaming" />
      <Tag text="KSI" />
    </div>
  );
};

export default Tags;
