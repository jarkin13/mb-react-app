import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as LikedVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/liked-videos.svg";

const LikedVideosTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <LikedVideosIcon />
      </div>
      <SideTag text="Liked Videos" active />
    </div>
  );
};

export default LikedVideosTab;
