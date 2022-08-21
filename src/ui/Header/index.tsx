import { useState } from "react";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as VideoCameraIcon } from "./icons/video-camera.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MicIcon } from "./icons/mic.svg";
import { ReactComponent as LogoIcon } from "./icons/logo.svg";
import userIcon from "./icons/user-icon.jpg";
import "./index.css";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);

  const onMenuClick = () => {
    setMenuShow(!menuShow);
  };

  const onNotificationClick = () => {};

  const onUserMenuClick = () => {};
  return (
    <header>
      <div className="column column-start">
        <div className="menu" onClick={onMenuClick}>
          <div className="icon">
            <MenuIcon />
            {menuShow && <div className="menu-nav">This is the Menu.</div>}
          </div>
        </div>
        <div className="logo">
          <LogoIcon />
        </div>
      </div>
      <div className="column column-center">
        <div className="search-bar">
          <input
            placeholder="search"
            type="search"
            name="search"
            id="search"
            autoComplete="off"
          />
          <div className="search">
            <div className="icon search-icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="Mic">
          <div className="icon mic-icon">
            <MicIcon />
          </div>
        </div>
      </div>
      <div className="column column-end">
        <div className="create-video">
          <div className="icon">
            <VideoCameraIcon />
          </div>
        </div>
        <div className="Notifications">
          <div className="icon">
            <div className="notifications-nav">
              This is the notifications bell.
            </div>
            <BellIcon />
          </div>
        </div>
        <div className="user-menu">
          <img src={userIcon} alt="user icon" />
          <div className="user-menu-nav">this is the user menu.</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
