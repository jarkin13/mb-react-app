import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as LibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/library.svg";
import { ReactComponent as ActiveLibraryIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeLibrary.svg";

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
