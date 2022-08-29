import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as ShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/shorts.svg";

const ShortsTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <ShortsIcon />
      </div>
      <SideTag text="Shorts" active />
    </div>
  );
};

export default ShortsTab;
