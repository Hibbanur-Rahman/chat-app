import { Routes, Route } from "react-router-dom";

import "./assets/styles/main.scss";
import Login from "./views/login";
import Register from "./views/register";
import DashBoard from "./views/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="row m-0 p-0">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/dashboard/*" element={<DashBoard/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
