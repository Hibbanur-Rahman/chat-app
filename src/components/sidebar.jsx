import { Link,useLocation } from "react-router-dom";
import ProfileAvatar from "../assets/images/profile-Avatar.svg";
const Sidebar = () => {
    const location = useLocation();

  return (
    <div className="sidebar col-1 m-0 p-0 pt-3 pb-3 d-flex flex-column  align-items-center justify-content-between ">
      <div className="m-0 p-0 row justify-content-center align-items-center">
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center" to="profile">
          <i className={` sidebar-i fs-3 bi bi-chat-square-text active  `}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="profile">
          <i className={`sidebar-i fs-3 bi bi-person-circle ${location.pathname==='/dashboard/profile'?'active':''}`}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  text-decoration-none " to="chatList">
          <i className={` sidebar-i fs-3 las la-comments ${location.pathname==='/dashboard/chatList'?'active':''} ${location.pathname==='/dashboard/'?'active':''} ${location.pathname==='/dashboard'?'active':''}`}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="contactList">
          <i className={`sidebar-i fs-3 bi bi-person-lines-fill ${location.pathname==='/dashboard/contactList'?'active':''} `}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="callList">
          <i className={`sidebar-i fs-3 bi bi-telephone ${location.pathname==='/dashboard/callList'?'active':''}`}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="bookmarks">
          <i className={`sidebar-i fs-3 bi bi-bookmarks ${location.pathname==='/dashboard/bookmarks'?'active':''}`}></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="setting">
          <i className={`sidebar-i fs-3 bi bi-gear ${location.pathname==='/dashboard/setting'?'active':''}`}></i>
        </Link>
      </div>

      <Link className="profile-img">
        <div
          className=" border border-1 p-0 m-0 rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          style={{ height: "50px", width: "50px" }}
        >
          <img
            src={ProfileAvatar}
            alt=""
            className="m-0 p-0 rounded-circle img-fluid "
            style={{ height: "50px" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
