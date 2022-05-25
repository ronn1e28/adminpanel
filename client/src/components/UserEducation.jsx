import React, {useState} from "react";
import Axios from "axios";
import TableView from "./TableView";

function UserEducation() {
  const [educationdetails, setEducationdetails] = useState([]);



  const getDetails = () => {
    Axios.get("http://localhost:3001/usereducation").then((response) => {
      setEducationdetails(response.data);
    });
  };
  return (
    <div>
      <button onClick={getDetails}>Get Details</button>
      <TableView details={educationdetails} />
    </div>
  );
}

export default UserEducation;
