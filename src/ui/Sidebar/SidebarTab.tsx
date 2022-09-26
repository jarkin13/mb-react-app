import SideTag from "../SideTag";
interface SidebarTabProps {
  SetActiveTab: () => void;
  text: string;
  active: boolean;
}
const SidebarTab = ({ SetActiveTab, text, active }: SidebarTabProps) => {
  return (
    <div onClick={() => SetActiveTab} className="sidebar-link LinkContent">
      <SideTag text={text} active={active} />
    </div>
  );
};

export default SidebarTab;
