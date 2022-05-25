import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Axios from "axios";

function HomePage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const FormTitles = ["HomePage", "Login"];

  const loginpage = () => {
    setPage(1);
  };

  const PageDisplay = () => {
    if (auth === false) {
      if (page === 0) {
        return (
          <div>
            <button onClick={loginpage}> Login</button>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              Register{" "}
            </button>
          </div>
        );
      } else {
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

            <button
              onClick={() => {
                login();
              }}
            >
              Login
            </button>
          </div>
        );
      }
    } else {
      return (
        <div>
          Welcome to the first page {name}
          <button onClick={logoutHandler}> Logout </button>
        </div>
      );
    }
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: userName,
      password: password,
    }).then((response) => {
      if (response.data.length > 0) {
        console.log("logged in");
        setName(response.data[0].fname)
        setAuth(true);
        setPage(0);
      } else {
        console.log("not logged in");
      }
    });
  };

  const prevbutton = () => {
    if (page === 1) {
      return (
        <button
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          {" "}
          Go back{" "}
        </button>
      );
    }
  };

  const logoutHandler = () => {
    setAuth(false);
    navigate("/");
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">{prevbutton()}</div>
      </div>
    </div>
  );
}

export default HomePage;
