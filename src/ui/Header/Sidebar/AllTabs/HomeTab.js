import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as HomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/home.svg";
import { ReactComponent as ActiveHomeIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeHome.svg";

export default function HomeTab() {
  const [state, setState] = React.useState(<HomeIcon />);

  function changeState() {
    setState(<ActiveHomeIcon />);
  }
  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Home" active />
    </div>
  );
}
