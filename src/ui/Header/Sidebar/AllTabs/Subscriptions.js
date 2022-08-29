import React from "react";
import SideTag from "../../../SideTag";
import "./index.css";
import { ReactComponent as SubscriptionsIcon } from "C:/Users/mikey-pc/Workspace/mb-react-app/src/ui/Header/icons/baricons/subscriptions.svg";

const SubscriptionsTab = () => {
  return (
    <div className="sidebar-link LinkContent">
      <div className="sidebarIconColumn">
        <SubscriptionsIcon />
      </div>
      <SideTag text="Subscriptions" active />
    </div>
  );
};

export default SubscriptionsTab;
