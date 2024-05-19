import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/images/logo-light.png";
import loginImg from '../assets/images/login-img.png';
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import VARIABLES from "../../environmentVariables";

const Register = () => {
  const [userDetails,setUserDetails]=useState({
    email:'',
    username:'',
    password:''
  });
  const navigate=useNavigate();
  const handleRegister=async (e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(`${VARIABLES.API_URL_REMOTE}/user-register`,userDetails);
      if(response.status===201){
        toast.success("User Registered Successfully");
        navigate('/login');
      }
    }catch(error){
      console.log(error);
      toast.error("Failed to register");
    }
  }
  const handleInputChange=(e)=>{
    setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }
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
      <h1 className="m-0 p-0 fw-medium mt-3 text-center">Register Account</h1>
      <p className=" fs-6 m-0 p-0 fw-medium mt-2 text-center text-secondary ">
        Get your first WebChat account now
      </p>
      <form action="/user-register" method="post" onSubmit={handleRegister} className="col-8 mt-5">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="hibbanrahmanhyt@gmail.com"
            name="email"
            onChange={handleInputChange}
            value={userDetails.email}
          />
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Hibbanur-Rahman"
            name="username"
            onChange={handleInputChange}
            value={userDetails.username}
          />
        </div>
        <div class="mb-3">
          <div className="row m-0 p-0 justify-content-between ">
            <label for="password" class="form-label w-auto ms-0 p-0">
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
            class="form-control"
            id="password"
            placeholder="*******"
            name="password"
            onChange={handleInputChange}
            value={userDetails.password}  
          />
        </div>
        <div className="row m-0 p-0 mt-5">
          <button className="btn btn-ctm text-light" onClick={handleRegister}>Register</button>
        </div>
        <div className="row m-0 p-0 justify-content-center align-items-center mt-5">

        <p className="m-0 p-0 text-secondary text-center w-auto">Already have an account ? </p>
        <Link to='/login' className="text-decoration-none w-auto m-0 p-0"><p className="m-0 p-0 text-decoration-underline w-auto" style={{color:"#4EAC6D"}}> Login</p></Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register;
