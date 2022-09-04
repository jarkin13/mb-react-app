import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as SubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/subscriptions.svg";
import { ReactComponent as ActiveSubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/activebaricons/activeSubscriptions.svg";

const SubscriptionsTab = () => {
  const [state, setState] = React.useState(<SubscriptionsIcon />);

  function changeState() {
    setState(<ActiveSubscriptionsIcon />);
  }

  return (
    <div onClick={changeState} className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">{state}</div>
      <SideTag text="Subscriptions" active />
    </div>
  );
};

export default SubscriptionsTab;
