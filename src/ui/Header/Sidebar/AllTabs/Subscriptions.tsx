import React from "react";
import SideTag from "../../../SideTag";
import { ReactComponent as SubscriptionsIcon } from "../../icons/baricons/subscriptions.svg";
import { ReactComponent as ActiveSubscriptionsIcon } from "../../icons/activebaricons/activeSubscriptions.svg";

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
