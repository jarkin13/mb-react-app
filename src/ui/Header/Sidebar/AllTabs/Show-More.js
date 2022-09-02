import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as ShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/show-more.svg";
import { ReactComponent as ActiveShowMoreIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeShowMore.svg";

const ShowMoreTab = () => {
  const [state, setState] = React.useState(<ShowMoreIcon />);

  function changeState() {
    setState(<ActiveShowMoreIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Show More" active />
    </div>
  );
};

export default ShowMoreTab;
