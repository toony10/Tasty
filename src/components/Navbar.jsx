import { useState } from "react";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faList },
    { name: "Settings", path: "/settings", icon: faCog },
  ];
  const [showSideBar, setShowSideBar] = useState(false);
  function closeSideBar() {
    setShowSideBar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          T<span>a</span>sty
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a> */}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar closeSideBar={closeSideBar} links={links} />}
    </>
  );
}

export default Navbar;
