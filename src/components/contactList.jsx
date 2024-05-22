import profileImage from "../assets/images/hibban-photo.jpg";

const ContactList = () => {
  return (
    <div className="contact-list row m-0 p-0 position-relative ">
      <div className="contact-TopBar pt-3 border border-1 border-top-0 border-start-0 border-end-0">
        <div className="row m-0 p-0 align-items-center justify-content-between">
          <h5 className="m-0 p-0 w-auto">Contacts</h5>
          <div
            className="w-auto d-flex rounded-2 p-3 pt-2 pb-2 justify-content-center align-items-center"
            style={{
              backgroundColor: "#4eac6d1a",
              color: "#4eac6d",
              cursor: "pointer",
            }}
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
      <div className="list-wrapper row m-0 p-0 ">
        <div className="list-item row m-0 p-0 pb-2 pt-3 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        <div className="list-item row m-0 p-0 pb-2 pt-2 align-items-center border border-1 border-top-0 border-start-0 border-end-0">
          <div className="col-2">
            <img
              src={profileImage}
              alt=""
              className="m-0 p-0 rounded-circle border border-1"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="row col-10 ps-3 m-0 p-0 justify-content-between">
              <h6 className="m-0 p-0 w-auto">Hibban</h6>          
                <i className=" m-0 p-0 bi bi-three-dots-vertical w-auto"></i>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactList;
