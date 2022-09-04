import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as ShowMoreIcon } from "../../icons/baricons/show-more.svg";
import { ReactComponent as ActiveShowMoreIcon } from "../../icons/activebaricons/activeShowMore.svg";

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
