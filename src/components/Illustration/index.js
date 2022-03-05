import React from "react";
import illustration from "../images/main_image.png";
import './Illustration.css';

function Illustration() {
  return (
    <div className="illustration">
      <img src={illustration} alt="Illustration of developer" />
    </div>
  );
}

export default Illustration;
