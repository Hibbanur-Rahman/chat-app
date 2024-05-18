import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-light.png";
import loginImg from "../assets/images/login-img.png";
import { useState } from "react";
import axios from "axios";
import VARIABLES from "../../environmentVariables";
import { toast } from "react-toastify";
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${VARIABLES.API_URL_REMOTE}/user-login`,
        userDetails
      );
      if (response.status === 200) {
        toast.success("login successfully!");
        localStorage.setItem('chat-token',response.data.token);
        navigate('/dashboard')
      }
    } catch (error) {
        toast.error("Failed to login!!");
    }
  };
  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="login row m-0 p-0 pt-5 ps-3 pe-3">
      <div className="col-lg-4 d-lg-flex d-none position-relative ">
        <div className="logo">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
        <div className="login-img">
          <img src={loginImg} alt="" className="position-absolute" />
        </div>
      </div>
      <div className="col-lg-8 col-12 d-flex flex-column  bg-light rounded-4 p-3  align-items-center">
        <h1 className="m-0 p-0 fw-medium mt-3 text-center">Welcome Back !</h1>
        <p className=" fs-6 m-0 p-0 fw-medium mt-2 text-center text-secondary ">
          Sign in to continue to WebChat
        </p>
        <form action="/user-login" method='post' onSubmit={handleLogin} className="col-8 mt-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="hibbanrahmanhyt@gmail.com"
              name='email'
              onChange={handleInputChange}
              value={userDetails.email}
            />
          </div>
          <div className="mb-3">
            <div className="row m-0 p-0 justify-content-between ">
              <label htmlFor="password" className="form-label w-auto ms-0 p-0">
                Password
              </label>
              <Link
                to="/forgot"
                className="m-0 p-0 w-auto text-secondary text-decoration-none"
              >
                <p className="m-0 p-0 w-auto">Forgot password?</p>
              </Link>
            </div>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*******"
              name='password'
              onChange={handleInputChange}
              value={userDetails.password}
            />
          </div>
          <div className="row m-0 p-0 mt-5">
            <button type="submit" className="btn btn-ctm text-light" onClick={handleLogin}>Log In</button>
          </div>
          <div className="row m-0 p-0 justify-content-center align-items-center mt-5">
            <p className="m-0 p-0 text-secondary text-center w-auto">
              Don't have an account ?{" "}
            </p>
            <Link
              to="/register"
              className="text-decoration-none w-auto m-0 p-0"
            >
              <p
                className="m-0 p-0 text-decoration-underline w-auto"
                style={{ color: "#4EAC6D" }}
              >
                {" "}
                Register
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
