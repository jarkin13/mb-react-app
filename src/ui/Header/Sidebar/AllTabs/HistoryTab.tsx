import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as HistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/history.svg";
import { ReactComponent as ActiveHistoryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeHistory.svg";
const HistoryTab = () => {
  const [state, setState] = React.useState(<HistoryIcon />);

  function changeState() {
    setState(<ActiveHistoryIcon />);
  }
  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="History" active />
    </div>
  );
};

export default HistoryTab;
