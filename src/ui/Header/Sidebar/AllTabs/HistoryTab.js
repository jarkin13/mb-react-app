import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as HistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/history.svg";

const HistoryTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <HistoryIcon />
      </div>
      <SideTag text="History" active />
    </div>
  );
};

export default HistoryTab;
