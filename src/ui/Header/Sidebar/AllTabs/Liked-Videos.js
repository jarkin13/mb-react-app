import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as LikedVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/liked-videos.svg";
import { ReactComponent as ActiveLikedVideosIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeLikedVideos.svg";
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
