import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const data = {
    name: name,
    email: email,
    avatar: image,
  };
  const navigate = useNavigate();
  const handleAdd = () => {
    fetch("https://reqres.in/api/users?page=2", data).then(navigate("/"));
  };

  return (
    <div className="container">
      <form>
        <label>Upload image</label>
        <input
          type="file"
          placeholder="upload image"
          value={image}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name.."
        />
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your email.."
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};
export default AddForm;
