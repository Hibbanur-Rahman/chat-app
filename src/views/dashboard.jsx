import { useEffect } from "react";
import { Routes, Route,useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setRoomId } from "../redux/chatSlice";

import Sidebar from "../components/sidebar";
import ChatContainer from "./chatContainer";
import ChatList from "../components/chatList";
import ContactList from "../components/contactList";
import CallList from "../components/callList";
import Profile from "../components/profile";
import Bookmarks from "../components/bookmarks";
import Setting from "../components/setting";
import SidebarMobile from "../components/sidebarMobile";
import { initialSocketConnection,disconnectSocket} from "../services/socketService";
const DashBoard = () => {
  const {roomId:routeRoomId}=useParams();
  const dispatch=useDispatch();
  const roomId=useSelector((state)=>state.chat.roomId);

  useEffect(()=>{

    const token=localStorage.getItem('chat-token');
    if(token){
      initialSocketConnection(token);
    }

    return ()=>{
      disconnectSocket();
    }
  },[]);

  useEffect(()=>{
    console.log("Current roomId:", roomId);  // Debug log
    if(routeRoomId){
      dispatch(setRoomId(routeRoomId));
    }else if(!roomId){
      const defaultRoomId='default-room-id';
      dispatch(setRoomId(defaultRoomId));
    }
  },[routeRoomId,roomId,dispatch])

  // const {roomId}=useParams();

  useEffect(() => {
    console.log("Current roomId:", roomId);  // Debug log
  }, [roomId]);

  return (
    <>
      <div className=" dashboard d-sm-flex d-none row m-0 p-0">
        <Sidebar />
        <div className="col-3 m-0 p-0">
          <Routes>
            <Route path="/chatList" element={<ChatList />} />
            <Route path="/contactList" element={<ContactList />} />
            <Route path="/callList" element={<CallList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/" element={<ChatList />} />
          </Routes>
        </div>
        <div className="col-8 m-0 p-0">
        <ChatContainer roomId={roomId} username=''/>
          {/* <Routes>
            <Route path='/chat/:roomId' element={<ChatContainer roomId={roomId}/>}/>
            <Route path='/' element={<ChatContainer roomId={roomId}/>}/>
            <Route path='/chatList' element={<ChatContainer roomId={roomId}/>}/>
          </Routes> */}
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
