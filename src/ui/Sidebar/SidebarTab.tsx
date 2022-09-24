import SideTag from "../SideTag";

interface SidebarTabProps {
  SetActiveTab: (tab: string) => void;
  text: string;
}

const SidebarTab = ({ SetActiveTab, text }: SidebarTabProps) => {
  return (
    <div onClick={() => SetActiveTab} className="sidebar-link LinkContent">
      <SideTag text={text} active={false} />
    </div>
  );
};

export default SidebarTab;
