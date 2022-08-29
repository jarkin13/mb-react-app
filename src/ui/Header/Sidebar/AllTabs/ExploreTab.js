import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as ExploreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/explore.svg";

const ExploreTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <ExploreIcon />
      </div>
      <SideTag text="Explore" active />
    </div>
  );
};

export default ExploreTab;
