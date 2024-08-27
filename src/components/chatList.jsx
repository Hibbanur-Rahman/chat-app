import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomId, setChats, setUsername } from "../redux/chatSlice";
import profileImage from "../assets/images/hibban-photo.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import VARIABLES from "../../environmentVariables";

const ChatList = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const chatRooms = [
    { id: "room1", name: "Alice", lastMessage: "Hello there!", date: "Monday" },
    { id: "room2", name: "Bob", lastMessage: "How are you?", date: "Tuesday" },
  ];
  const [allUser,setAllUser]=useState([]);

  const handleGetAllUser=async()=>{
      try{
        const response=await axios.get(`${VARIABLES.API_URL_REMOTE}/all-user`);
        if(response.status===200){
          setAllUser(response.data.data);
          dispatch(setChats(response.data.data));
        }

      }catch(error){
        console.error(error);
        toast.error("Something went wrong!!");
      }
  }

  // useEffect(() => {
  //   const mockChats = [
  //     {
  //       id: "room1",
  //       name: "Alice",
  //       lastMessage: "Hello there!",
  //       date: "Monday",
  //     },
  //     {
  //       id: "room2",
  //       name: "Bob",
  //       lastMessage: "How are you?",
  //       date: "Tuesday",
  //     },
  //   ];
  //   dispatch(setChats(mockChats));
  // }, [dispatch]);

  const handleSelectChat = (roomId, name) => {
    dispatch(setRoomId(roomId));
    dispatch(setUsername(name));
  };

  useEffect(()=>{
    console.log("Variables",VARIABLES);
    handleGetAllUser();
  },[]);

  return (
    <div className="chatList row m-0 p-0 position-relative ">
      <div className="chat-TopBar pt-3 ">
        <div className="row m-0 p-0 align-items-center justify-content-between">
          <h5 className="m-0 p-0 w-auto">Chats</h5>
          <div
            className="w-auto d-flex rounded-2 p-3 pt-2 pb-2 justify-content-center align-items-center"
            style={{
              backgroundColor: "#4eac6d1a",
              color: "#4eac6d",
              cursor: "pointer",
            }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="m-0 p-0 bi bi-plus-lg w-auto"></i>
          </div>
        </div>
        <div className="row m-0 p-0 mt-4 position-relative align-items-center">
          <input
            type="text"
            className="rounded-2 border border-1 p-2"
            placeholder="Search here.."
          />
          <i
            className="m-0 p-0 bi bi-search position-absolute w-auto"
            style={{ right: "20px", cursor: "pointer" }}
          ></i>
        </div>
      </div>
      {/* -- chat add Modal -- */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" style={{ backgroundColor: "#4EAC6D" }}>
              <h1 class="modal-title fs-5 text-light" id="staticBackdropLabel">
                Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row m-0 p-0 mt-4 position-relative align-items-center">
                <input
                  type="text"
                  className="rounded-2 border border-1 p-2"
                  placeholder="Search here.."
                />
                <i
                  className="m-0 p-0 bi bi-search position-absolute w-auto"
                  style={{ right: "20px", cursor: "pointer" }}
                ></i>
              </div>
              <div className="row m-0 p-0">
                <p className="text-secondary fs-6 mt-4 mb-4">CONTACTS</p>
                {
                  Array.isArray(allUser) && allUser.map((item,index)=>(
                    <div className="col-12" key={index}>
                      <p>{item.username}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary bg-transparent border"
                style={{ color: "#4EAC6D" }}
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn "
                style={{ backgroundColor: "#4EAC6D" }}
              >
                <i className="bi bi-send text-light"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="direct-message-list row m-0 p-0 mt-3">
        {Array.isArray(chats) &&
          chats.map((chat) => (
            <div
              className="list-item row m-0 p-0 pb-2 pt-2 border border-1 border-start-0 border-end-0 border-top-0"
              key={chat._id}
              onClick={() => handleSelectChat(chat._id, chat.username)}
            >
              <div className="col-2">
                <img
                  src={profileImage}
                  alt=""
                  className="m-0 p-0 rounded-circle border border-1"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="col-10">
                <div className="row m-0 p-0 justify-content-between ">
                  <h6 className="m-0 p-0 w-auto">{chat.username}</h6>
                  <p className="w-auto m-0 p-0">{chat.updatedAt}</p>
                </div>
                <p className="m-0 p-0 w-auto overflow-hidden">
                  {/* {chat.lastMessage} */}
                  Hello
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatList;
