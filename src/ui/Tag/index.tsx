import "./index.css";
interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <div className="filter-selector">
      <p>{text}</p>
    </div>
  );
};

export default Tag;
