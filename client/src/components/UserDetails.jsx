import React from "react";
import Axios from 'axios'

function UserDetails() {
  const getDetails = () => {
    Axios.get("http://localhost:3001/userdetails").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button onClick={getDetails}>Get Details</button>
    </div>
  );
}

export default UserDetails;
