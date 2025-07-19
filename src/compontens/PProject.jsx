import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function PProject() {
  return (
    // <div className="flex flex-col justify-between items-center m-10 gap-6">
    <div className="flex flex-col mb-8 m-10 gap-6 max-sm:m-4  ">
      {/* card */}

      <div className="shadow-lg  rounded-lg  justify-center  p-5 flex  gap-20 max-sm:flex max-sm:flex-col ">
        <div className="border p-8 w-96 shadow-inner shadow-slate-500 rounded-xl ">
          <h1 className="text-center font-serif font-bold ">
            Contact_Saver app{" "}
          </h1>
          <a href="https://www.google.com/" target="_blank">
            <div className=" border p-2 bg-slate-400   rounded-xl  hover:shadow-2xl hover:shadow-slate-500">
              <div className="">
                <img
                  src="Mukeshphoto.png"
                  height="100px"
                  width="300px"
                  alt=""
                />
              </div>

              <div className=" flex justify-between  bg-slate-400 p-3">
                <FaNodeJs />
                <FaReact />
                <FaReact />
                <FaReact />
                <FaReact />
                <FaReact />
              </div>
            </div>
          </a>
        </div>
        {/* ----------------------------- */}
        <div className="border p-8 w-96 shadow-inner shadow-slate-500 rounded-xl ">
          <h1 className="text-center font-serif font-bold ">
            Contact_Saver app{" "}
          </h1>
          <a href="https://www.google.com/" target="_blank">
            <div className=" border p-2 bg-slate-400   rounded-xl shadow-2xl shadow-slate-500">
              <div className="">
                <img
                  src="Mukeshphoto.png"
                  height="100px"
                  width="300px"
                  alt=""
                />
              </div>

              <div className=" flex justify-between  bg-slate-400 p-3">
                <FaNodeJs />
                <FaReact />
                <FaReact />
                <FaReact />
                <FaReact />
                <FaReact />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* <div className=" w-[50%] h-96 shadow-lg hover:shadow-pink-500 border border-black rounded-lg "></div> */}
    </div>
  );
}

export default PProject;
