import React, { useState } from "react";

function Model({ handleclose, handleAccept }) {
  const handleOutClick = (e) => {
    let id = e.target.id;
    if (id == "model") {
      handleclose();
    }
  };
  return (
    <div
      id="model"
      onClick={handleOutClick}
      className=" bg-[radial-gradient(white,rgb(0,0,0,0.5)100%)] fixed z-0 w-[100%]   h-[70%]  top-0 left-0 grid  place-items-center  "
    >
      <div className="  bg-cyan-400 h-60  w-60">
        <button className="p-2" onClick={handleclose}>
          X
        </button>
        <div className=" flex justify-center  ">click below</div>

        <button
          onClick={handleAccept}
          className=" bg-blue-400  m-auto p-2 rounded-md flex justify-center mt-20 "
        >
          Accept Offer
        </button>
      </div>
    </div>
  );
}

export default Model;
