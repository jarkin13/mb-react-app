import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as YourVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/your-videos.svg";

const YourVideosTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <YourVideosIcon />
      </div>
      <SideTag text="Your Videos" active />
    </div>
  );
};

export default YourVideosTab;
