import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as ShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/show-more.svg";

const ShowMoreTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <ShowMoreIcon />
      </div>
      <SideTag text="ShowMore" active />
    </div>
  );
};

export default ShowMoreTab;
