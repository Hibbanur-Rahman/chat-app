import { Link } from "react-router-dom";
import ProfileAvatar from "../assets/images/profile-Avatar.svg";
const Sidebar = () => {
  return (
    <div className="sidebar col-1 m-0 p-0 pt-3 pb-3 d-flex flex-column  align-items-center justify-content-between ">
      <div className="m-0 p-0 row justify-content-center align-items-center">
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="profile">
          <i className=" fs-3 bi bi-chat-square-text"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="profile">
          <i className=" fs-3 bi bi-person-circle"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  text-decoration-none" to="chatList">
          <i class="fs-3 las la-comments"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="contactList">
          <i className=" fs-3 bi bi-person-lines-fill"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="callList">
          <i className=" fs-3 bi bi-telephone"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="bookmarks">
          <i className=" fs-3 bi bi-bookmarks"></i>
        </Link>
        <Link className="m-0 mt-2 mb-2 p-0 d-flex justify-content-center  " to="setting">
          <i className=" fs-3 bi bi-gear"></i>
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
