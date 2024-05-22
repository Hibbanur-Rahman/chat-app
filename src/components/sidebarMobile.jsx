import { Link,useLocation } from "react-router-dom";
const SidebarMobile = () => {
    const location=useLocation();
  return (
    <div className="sidebar-mobile position-absolute  row m-0 p-0 align-items-center ">
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  text-decoration-none"
          to="chatList"
        >
          <i class={`sidebar-i fs-3 las la-comments ${location.pathname==='/dashboard/chatList'?'active':''} ${location.pathname==='/dashboard/'?'active':''}`}></i>
        </Link>
      </div>
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  "
          to="contactList"
        >
          <i className={`sidebar-i fs-3 bi bi-person-lines-fill ${location.pathname==='/dashboard/contactList'?'active':''}`}></i>
        </Link>
      </div>
     
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  "
          to="callList"
        >
          <i className={`sidebar-i fs-3 bi bi-telephone ${location.pathname==='/dashboard/callList'?'active':''}`}></i>
        </Link>
      </div>
     
     
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  "
          to="bookmarks"
        >
          <i className={`sidebar-i fs-3 bi bi-bookmarks ${location.pathname==='/dashboard/bookmarks'?'active':''}`}></i>
        </Link>
      </div>
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  "
          to="setting"
        >
          <i className={`sidebar-i fs-3 bi bi-gear ${location.pathname==='/dashboard/setting'?'active':''}`}></i>
        </Link>
      </div>
      <div className="col-2">
        <Link
          className="m-0 mt-2 mb-2 p-0  d-flex justify-content-center  "
          to="profile"
        >
          <i className={`sidebar-i fs-3 bi bi-person-circle ${location.pathname==='/dashboard/profile'?'active':''}`}></i>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMobile;
