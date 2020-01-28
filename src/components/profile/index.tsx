import React from "react";
import "./style.css";
import photo from "../../assets/photo.png";

function Profile() {
  return (
    <div className="home-profile">
      <img src={photo} alt="Juan Felix Photo" />
      <h1>Juan Felix</h1>
      <span className="eng">Software Engineering</span>
      <span className="type-dev">Fullstack</span>
    </div>
  );
}

export default Profile;
