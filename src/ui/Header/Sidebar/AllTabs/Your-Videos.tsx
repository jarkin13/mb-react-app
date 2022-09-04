import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as YourVideosIcon } from "../../icons/baricons/video-camera.svg";

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
