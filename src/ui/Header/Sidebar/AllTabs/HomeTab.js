import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as HomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/home.svg";

const HomeTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <HomeIcon />
      </div>
      <SideTag text="Home" active />
    </div>
  );
};

export default HomeTab;
