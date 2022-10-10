import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as LikedVideosIcon } from "../../icons/baricons/liked-videos.svg";
import { ReactComponent as ActiveLikedVideosIcon } from "../../icons/activebaricons/activeLikedVideos.svg";
const LikedVideosTab = () => {
  const [state, setState] = React.useState(<LikedVideosIcon />);

  function changeState() {
    setState(<ActiveLikedVideosIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Liked Videos" active />
    </div>
  );
};

export default LikedVideosTab;
