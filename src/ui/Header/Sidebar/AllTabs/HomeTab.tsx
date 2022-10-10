import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as HomeIcon } from "../../icons/baricons/home.svg";
import { ReactComponent as ActiveHomeIcon } from "../../icons/activebaricons/activeHome.svg";

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
