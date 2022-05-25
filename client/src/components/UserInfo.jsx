import React from "react";

function UserInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name"
        value={formData.FirstName}
        onChange={(e) => {
          setFormData({ ...formData, FirstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.LastName}
        onChange={(e) => {
          setFormData({ ...formData, LastName: e.target.value });
        }}
      />

      <input
        type="email"
        placeholder="Email..."
        value={formData.Email}
        onChange={(e) => {
          setFormData({ ...formData, Email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Phone..."
        value={formData.PhoneNumber}
        onChange={(e) => {
          setFormData({ ...formData, PhoneNumber: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setFormData({ ...formData, Password: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="ConfirmPassword..."
        pattern={formData.Password}
      />
    </div>
  );
}

export default UserInfo;

/*
<select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
          </select>
          */
