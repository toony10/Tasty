import { Link, useLocation } from "react-router-dom";

import {
  faHome,
  faList,
  faCog,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

function SideBar({ links, closeSideBar }) {
  const location = useLocation();
  return (
    <div className='sidebar' onClick={closeSideBar}>
      {links.map((link) => (
        <Link
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          to={link.path}
          key={link.name}>
          <FontAwesomeIcon icon={link.icon} /> {link.name}
        </Link>
      ))}
    </div>
  );
}
export default SideBar;
