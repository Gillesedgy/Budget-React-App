import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../Assets/fire.mp4";
import "./Error.css";
export default function Error() {
let navigate = useNavigate()

  return (
    <div className="Error">
      <div className="Shadow"></div>
      {" "}
      <video src={error} muted autoPlay loop></video>
      <div className="Message">
        <h1>Oops! Something went wrong.</h1>{" "}
        <button onClick={() => navigate(`/transactions`)}>Home</button>
        {/* https://www.ramseysolutions.com/dave-ramsey-7-baby-steps */}
      
     
      </div>
    </div>
  );
}
