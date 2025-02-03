// src/components/UserForm.js
import React, { useState, useEffect } from "react";
import "./UserForm.css"; // Add a CSS file for styling

const UserForm = ({ userData, setUserData }) => {
  const [formData, setFormData] = useState(userData);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setError("All fields are required");
      return;
    }
    setUserData(formData);
    setIsDirty(false);
    setError("");
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <button type="submit">Save</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default UserForm;