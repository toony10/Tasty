import
  {
    faHome,
    faList,
    faCog,
    FontAwesomeIcon,
  } from "@fortawesome/react-fontawesome";

function SideBar({ links, closeSideBar })
{
  return (
    <div className="sidebar" onClick={ closeSideBar }>
      { links.map((link) => (
        <a className="sidebar-link" href="#!" key={ link.name }>
          <FontAwesomeIcon icon={ link.icon } /> { link.name }
        </a>
      )) }
    </div>
  );
}
export default SideBar;
