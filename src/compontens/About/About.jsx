import React from "react";
import { Link } from "react-router-dom";
import Overlay from "../../Project/overlay/Overlay";

function About() {
  return (
    <>
      <div>
        <Link to="/projcet/emi">
          <img src="" alt="" />
          EMI CALCULATAR
        </Link>

        <div>
          <Overlay />
        </div>
      </div>
    </>
  );
}

export default About;
