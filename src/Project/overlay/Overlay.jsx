import React, { useState } from "react";
import Model from "./Model";

function Overlay() {
  const [isshow, setIsShow] = useState(false);
  const [isofferAccept, setIsOfferAccept] = useState(false);

  const handleOpen = () => {
    setIsShow(true);
  };
  const handleclose = () => {
    setIsShow(false);
  };

  const handleAccept = () => {
    setIsOfferAccept(true);
    setIsShow(false);
  };
  return (
    <div className=" m-20 h-48 ">
      <div className=" flex justify-center     ">
        {!isofferAccept && (
          <button
            onClick={handleOpen}
            className="   bg-pink-600 border border-black rounded-md p-2 hover:bg-green-600 "
          >
            show offer
          </button>
        )}
        {isofferAccept && <div> offer accepted </div>}
      </div>
      <div>
        {isshow && (
          <Model handleclose={handleclose} handleAccept={handleAccept} />
        )}
      </div>
    </div>
  );
}

export default Overlay;
