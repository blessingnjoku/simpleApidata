import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = (val) => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  });
  if (user == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <h1>My Details</h1>
      <div style={{ width: "100px", height: "100px" }}>
        <img src={user.avatar} alt="avatar" />
      </div>
      <p> This User id is :{id}</p>
      <p>
        Name:
        <b>
          {`${user.first_name} `}
          {user.last_name}
        </b>
      </p>
      <p>
        Email: <b>{user.email}</b>
      </p>
    </div>
  );
};
export default User;
