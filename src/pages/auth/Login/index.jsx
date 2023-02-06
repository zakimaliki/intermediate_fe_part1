import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../configs/redux/actions/userAction";
function Login() {
  const [formLogin, setFromLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFromLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginUser(formLogin,navigate))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" value={formLogin.email}  onChange={handleChange}/><br />
        <input type="password" name="password" placeholder="password" value={formLogin.password} onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
