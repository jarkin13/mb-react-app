import "./index.css";
interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <div className="filter-selector all-filter">
      <p>{text}</p>
    </div>
  );
};

export default Tag;
