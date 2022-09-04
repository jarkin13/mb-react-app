import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as HistoryIcon } from "../../icons/baricons/history.svg";
import { ReactComponent as ActiveHistoryIcon } from "../../icons/activebaricons/activeHistory.svg";
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
