import profileImage from "../assets/images/hibban-photo.jpg";

const Profile = () => {
  return (
    <div className="profile row m-0 p-0">
      <div className="topBar row m-0 p-2 pt-3  justify-content-between">
        <h4 className="m-0 p-0 w-auto text-light">My Profile</h4>
        <i className="w-auto fs-5 m-0 p-0 bi bi-three-dots-vertical text-light"></i>
      </div>
      <div className="profile-details row m-0 p-0 pb-4 justify-content-center border border-1 border-top-0 border-start-0 border-end-0">
        <div
          className="m-0 p-0 rounded-circle overflow-hidden border border-4 d-flex align-items-center justify-content-center"
          style={{ height: "80px", width: "80px" }}
        >
          <img
            src={profileImage}
            alt="profileImage"
            className="rounded-circle m-0 p-0 img-fluid"
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <h5 className="m-0 p-0 text-center mt-3">Hibbanur Rahman</h5>
        <p className="m-0 p-0 text-secondary text-center">
          Full stack Developer
        </p>
      </div>

      <div className="profile-wrapper m-0 p-3 mt-3 ">
        <p className="m-0 p-0 text-secondary ">
          If several languages coalesce, the grammar of the resulting language
          is more simple.
        </p>
        <div className="row m-0 p-0 mt-3 mb-3 align-items-center ">
          <i className="fs-4  text-secondary  m-0 ps-0 bx bx-user w-auto "></i>
          <p className="m-0 p-0 text-secondary w-auto">Hibbanur Rahman</p>
        </div>
        <div className="row m-0 p-0 mt-3 mb-3 align-items-center ">
          <i className="fs-4  text-secondary  m-0 ps-0 bx bx-message-rounded-dots w-auto "></i>
          <p className="m-0 p-0 text-secondary w-auto">hibbanrahmanhyt@gmail.com</p>
        </div>
        <div className="row m-0 p-0 mt-3 mb-3 align-items-center ">
          <i className="fs-4  text-secondary  m-0 ps-0 bi bi-geo-alt w-auto "></i>
          <p className="m-0 p-0 text-secondary w-auto">Hyderabad,Telangana,India</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
