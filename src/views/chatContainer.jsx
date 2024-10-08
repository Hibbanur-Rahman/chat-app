import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import userProfile from "../assets/images/hibban-photo.jpg";
import {
  joinRoom,
  subscribeToChat,
  sendMessage,
} from "../services/socketService";
import MessageItem from "../components/messageItem";
import VARIABLES from "../../environmentVariables";
// import { fetchMessages } from "../services/messageService";

const ChatContainer = ({ roomId }) => {
  const username = useSelector((state) => state.chat.username);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${VARIABLES.API_URL_REMOTE}/messages/${roomId}`,
        {
          headers: {
            Authorization: localStorage.getItem("chat-token"),
          },
        }
      );
      if (response.status === 200) {
        setMessages(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (roomId) {
      fetchMessages();
    }
  }, [roomId]);
  useEffect(() => {
    console.log(roomId);
    joinRoom(roomId);
    subscribeToChat((err, msg) => {
      if (err) {
        return console.error(err);
      }
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, [roomId]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (input.trim()) {
      sendMessage(roomId, input, username);
      setInput("");
    }
  };

  return (
    <div className="chat-container row m-0 p-0">
      {/**TopBar of chat container */}
      <div className="navBar m-0 p-0 ps-3 pt-3 pb-3 d-flex justify-content-between">
        <div className="row m-0 p-0 w-auto">
          <div
            className="profile rounded-circle  border border-1 m-0 p-0 d-flex align-items-center justify-content-center overflow-hidden "
            style={{ height: "50px", width: "50px" }}
          >
            <img
              src={userProfile}
              alt=""
              className="m-0 p-0 img-fluid"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="w-auto">
            <h5 className="m-0 p-0">{username}</h5>
            <p className="m-0 p-0 text-secondary">online</p>
          </div>
        </div>
        <div className="row m-0 p-0 w-auto">
          <i className="w-auto fs-5 bi bi-search"></i>
          <i className="w-auto fs-5 bi bi-telephone"></i>
          <i className="w-auto fs-5 bi bi-camera-video"></i>
          <i className="w-auto fs-5 bi bi-info-circle"></i>
          <i className="w-auto fs-5 bi bi-three-dots-vertical"></i>
        </div>
      </div>
      {/**Chat items */}

      <div className="messages-container m-0 p-0 ps-3 pe-3">
        {/* <div className="message-item-wrapper mt-2 mb-2  row  m-0 p-0 ">
          <div className="message-item bg-light w-auto m-0 p-3">
            <p className="m-0 p-0 w-auto">Hi</p>
            <p className="time-message m-0 p-0 text-secondary text-end">
              3:12pm
            </p>
          </div>
        </div>
        <div className="message-item-wrapper mt-2 mb-2  row  m-0 p-0 ">
          <div className="message-item bg-light w-auto m-0 p-3">
            <p className="m-0 p-0 w-auto">Hello how are you</p>
            <p className="time-message m-0 p-0 text-secondary text-end">
              3:12pm
            </p>
          </div>
        </div> */}
        <MessageItem isSender={true} message="Hi" time="3:12 pm" />
        <MessageItem isSender={false} message="Hello" time="3:12 pm" />
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-item-wrapper mt-2 mb-2 row m-0 p-0 ${
              msg.isSender ? "justify-content-end" : ""
            }`}
          >
            <div className="message-item bg-light w-auto m-0 p-3">
              <p className="m-0 p-0 w-auto">{msg.text}</p>
              <p className="time-message m-0 p-0 text-secondary text-end">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/**Send box of chat container */}
      <div className="send-box row m-0 p-0 pt-3 pb-3 align-items-center">
        <div className="col-1 d-flex justify-content-between">
          <i className="w-auto fs-5 bi bi-three-dots"></i>
          <i className="w-auto fs-5 bi bi-emoji-smile"></i>
        </div>
        <input
          type="text"
          className="col-md-9 col-lg-10 rounded-2 border border-1 m-0 p-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="col-1 d-flex justify-content-between">
          <i className="w-auto fs-4 bx bx-microphone"></i>
          <i
            className="w-auto fs-4 bx bxs-send"
            onClick={handleSendMessage}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
