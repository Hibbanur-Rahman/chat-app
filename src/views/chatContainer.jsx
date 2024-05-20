import userProfile from "../assets/images/hibban-photo.jpg";
const ChatContainer = () => {
  return (
    <div className="chat-container row m-0 p-0">
      {/**TopBar of chat container */}
      <div className="navBar m-0 p-0 pt-3 pb-3 d-flex justify-content-between">
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
            <h5 className="m-0 p-0">Hibbanur Rahman</h5>
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
      <div className="messages-container row m-0 p-0">
        <div className="message-item-sender bg-light  row w-auto m-0 p-3 align-content-start">
            <p className="m-0 p-0">Hello</p>
        </div>
        <div className="message-item-sender bg-light  row w-auto m-0 p-3 align-content-start">
            <p className="m-0 p-0">Hello</p>
        </div>
        <div className="message-item-sender bg-light  row w-auto m-0 p-3 align-content-start">
            <p className="m-0 p-0">Hello</p>
        </div>
        <div className="message-item-sender bg-light  row w-auto m-0 p-3 align-content-start">
            <p className="m-0 p-0">Hello</p>
        </div>
      </div>


      {/**Send box of chat container */}
      
      <div className="send-box  row m-0 p-0 pt-3 pb-3 align-items-center">
        <div className="col-1 d-flex justify-content-between ">
          <i className="w-auto fs-5 bi bi-three-dots "></i>
          <i className="w-auto fs-5 bi bi-emoji-smile"></i>
        </div>

        <input
          type="text"
          className="col-md-9 col-lg-10 rounded-2 border border-1 m-0 p-2"
          placeholder="Type your message....."
        />
        <div className="col-1 d-flex justify-content-between ">
          <i className="w-auto fs-4 bx bx-microphone"></i>
          <i className="w-auto fs-4 bx bxs-send"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;