import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ userData, setUserData }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(JSON.stringify(userData, null, 2));
  }, [userData]);

  const handleChange = (value) => {
    setContent(value);
    try {
      const parsedData = JSON.parse(value);
      setUserData(parsedData);
    } catch (error) {
      console.error("Invalid JSON");
    }
  };

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;