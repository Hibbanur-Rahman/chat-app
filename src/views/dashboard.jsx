import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/sidebar";
import ChatContainer from "./chatContainer";
import ChatList from "../components/chatList";
import ContactList from "../components/contactList";
import CallList from "../components/callList";
import Profile from "../components/profile";
import Bookmarks from "../components/bookmarks";
import Setting from "../components/setting";
import SidebarMobile from "../components/sidebarMobile";

const DashBoard = () => {
  return (
    <>
      <div className=" dashboard d-sm-flex d-none row m-0 p-0">
        <Sidebar />
        <div className="col-4">
          <Routes>
            <Route path="chatList" element={<ChatList />} />
            <Route path="contactList" element={<ContactList />} />
            <Route path="callList" element={<CallList />} />
            <Route path="profile" element={<Profile />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="setting" element={<Setting />} />
            <Route path="/" element={<ChatList />} />
          </Routes>
        </div>
        <div className="col-7">
          <ChatContainer />
        </div>
      </div>
      <div className=" dashboard-mobile row m-0 p-0 d-flex d-sm-none">
        <div className="col-12">
          <Routes>
            <Route path="chatList" element={<ChatList />} />
            <Route path="contactList" element={<ContactList />} />
            <Route path="callList" element={<CallList />} />
            <Route path="profile" element={<Profile />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="setting" element={<Setting />} />
            <Route path="/" element={<ChatList />} />
          </Routes>
        </div>
        {/* <div className="col-12">
          <ChatContainer />
        </div> */}
        <SidebarMobile/>
      </div>
    </>
  );
};

export default DashBoard;
