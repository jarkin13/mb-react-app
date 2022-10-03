import SideTag from "../SideTag";
interface SidebarTabProps {
  text: string;
  active: boolean;
}
const SidebarTab = ({ text, active }: SidebarTabProps) => {
  return (
    <div className="sidebar-link LinkContent">
      <SideTag text={text} active={active} />
    </div>
  );
};

export default SidebarTab;
