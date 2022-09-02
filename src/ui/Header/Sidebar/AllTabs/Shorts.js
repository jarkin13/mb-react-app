import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as ShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/shorts.svg";
import { ReactComponent as ActiveShortsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeShorts.svg";

const ShortsTab = () => {
  const [state, setState] = React.useState(<ShortsIcon />);

  function changeState() {
    setState(<ActiveShortsIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Shorts" active />
    </div>
  );
};

export default ShortsTab;
