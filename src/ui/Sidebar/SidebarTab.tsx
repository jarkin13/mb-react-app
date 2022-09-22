import SideTag from "../SideTag";

interface SidebarTabProps {
  setActiveTab: (tab: any) => void;
  text: any;
}

const SidebarTab = ({ setActiveTab, text }: SidebarTabProps) => {
  return (
    <div onClick={() => setActiveTab} className="sidebar-link LinkContent">
      <SideTag text={text} active={false} />
    </div>
  );
};

export default SidebarTab;
