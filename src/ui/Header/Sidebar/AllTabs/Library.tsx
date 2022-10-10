import React from "react";
import SideTag from "../../../SideTag";

import { ReactComponent as LibraryIcon } from "../../icons/baricons/library.svg";
import { ReactComponent as ActiveLibraryIcon } from "../../icons/activebaricons/activeLibrary.svg";

const LibraryTab = () => {
  const [state, setState] = React.useState(<LibraryIcon />);

  function changeState() {
    setState(<ActiveLibraryIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Library" active />
    </div>
  );
};

export default LibraryTab;
