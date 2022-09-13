import SideTag from "../SideTag";

interface SidebarTabProps {
  setActiveTab: (tab: string) => void;
  text: string;
}

const SidebarTab = ({ setActiveTab, text }: SidebarTabProps) => {
  return (
    <div onClick={() => setActiveTab} className="sidebar-link LinkContent">
      <SideTag text={text} active={false} />
    </div>
  );
};

export default SidebarTab;
