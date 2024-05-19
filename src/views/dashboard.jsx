import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/sidebar";
import ChatContainer from "./chatContainer";
import ChatList from "../components/chatList";
import ContactList from "../components/contactList";
import CallList from "../components/callList";
import Profile from "../components/profile";
import Bookmarks from "../components/bookmarks";
import Setting from "../components/setting";

const DashBoard = () => {
    return (
        <div className="row m-0 p-0">
            <Sidebar />
            <div className="col-4">
                <Routes>
                    <Route path="chatList" element={<ChatList />} />
                    <Route path="contactList" element={<ContactList />} />
                    <Route path="callList" element={<CallList />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="bookmarks" element={<Bookmarks />} />
                    <Route path="setting" element={<Setting/>} />
                    <Route path="/" element={<ChatList />} />
                </Routes>
            </div>
            <div className="col-7">
                <ChatContainer />
            </div>
        </div>
    );
};

export default DashBoard;
