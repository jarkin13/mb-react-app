import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as LibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/library.svg";

const LibraryTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <LibraryIcon />
      </div>
      <SideTag text="Library" active />
    </div>
  );
};

export default LibraryTab;
