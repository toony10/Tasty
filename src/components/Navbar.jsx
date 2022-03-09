import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  return (
    <>
      <div className='navbar container'>
        <Link to='/' href='#!' className='logo'>
          T<span>a</span>sty
        </Link>
        <div className='nav-links'>
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      {showSideBar && <SideBar closeSideBar={closeSideBar} links={links} />}
    </>
  );
}

export default Navbar;
