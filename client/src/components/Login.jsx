import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function Login(auth, setAuth) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: userName,
      password: password,
    }).then((response) => {
      if(response.data.length > 0) {
        console.log("loged in")
      } else {
        console.log("not loged in")
      }
    });
    navigate('/')
  };


  
  return (
    <div>
        <input
          name="email"
          type="text"
          placeholder="Enter Email"
          required={true}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          password="password"
          type="password"
          placeholder="Enter Password"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
    </div>
  );
}

export default Login;
