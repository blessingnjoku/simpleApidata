import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Profiles = () => {
  const [State, setState] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setState(data.data));
  });
  
  if (State == null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>Registered User</h1>
        <Link to='add'>
         
          <button
            style={{
              backgroundColor: "gray",
              marginLeft: "20px",
            }}
          >
            Add User
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {State.map((val, key) => {
          return (
            <div className="card" key={key}>
              <div className="img-box">
                <img src={val.avatar} alt="avatar" />
                <p>
                  {`${val.first_name} `}
                  {val.last_name}
                </p>
                <Link to={`/${val.id}`}>
                  <button>full Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profiles;
