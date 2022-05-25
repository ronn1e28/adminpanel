import React, { useState } from "react";
import UserInfo from "./UserInfo";
import EducationInfo from "./EducationInfo";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function Register() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Email: "",
    PhoneNumber: "",
    Passowrd: "",
    InstituteName: "",
    Marks: "",
    Stream: "",
    StartDate: "",
    EndDate: "",
  });

  const register = () => {
    Axios.post("http://localhost:3001/register", formData).then((response) => {
      console.log(response);
      navigate("/login");
    });
  };

  const FormTitles = ["User Info", "Educational Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <UserInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <EducationInfo formData={formData} setFormData={setFormData} />;
    }
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
          Prev{" "}
        </button>
      );
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {prevbutton()}
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                register();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
