import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function PProject() {
  return (
    // <div className="flex flex-col justify-between items-center m-10 gap-6">
    <div className="flex flex-col  mb-8 m-10 gap-6 max-sm:m-4  ">
      {/* card */}

      <div className="shadow-lg  rounded-lg  justify-center  p-5 flex  gap-20 max-sm:flex max-sm:flex-col ">
        <div className="border p-8 w-96 shadow-inner shadow-slate-500 rounded-xl ">
          <h1 className="text-center font-serif font-bold ">
            Contact_Saver app{" "}
          </h1>
          <a href="https://contact-saver-front.vercel.app/" target="_blank">
            <div className=" border pl-3  pt-3 bg-slate-400   rounded-xl  hover:shadow-2xl hover:shadow-slate-500">
              <div className="w-72 border h-72">
                <img src="login_pic.png " height="" width="300px" alt="" />
              </div>

              <div className="mr-4 rounded-lg p-3 bg-slate-400">
                <div className=" flex justify-between   mr-3 mt-3 p-3 rounded-xl  shadow-indigo-500   shadow">
                  <FaNodeJs className="hover:text-slate-700" />
                  <FaReact />

                  <FaReact />
                  <FaReact />
                  <FaReact />
                </div>
                <div className=" flex justify-between   mr-3   p-3 rounded-xl  shadow-indigo-500 shadow mb-2">
                  <FaNodeJs />
                  <FaReact />

                  <FaReact />
                  <FaReact />
                  <FaReact />
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* ----------------------------- */}
        <div className="border p-8 w-96 shadow-inner shadow-slate-500 rounded-xl ">
          <h1 className="text-center font-serif font-bold ">SHOPPER</h1>
          <p>
            <a href="https://github.com">Github Link</a>
          </p>
          <a href="https://shopping-c5e42d.netlify.app/" target="_blank">
            <div className=" border pl-3  pt-3 bg-slate-400   rounded-xl  hover:shadow-2xl hover:shadow-slate-500">
              <div className="w-72 border h-72">
                <img src="shopperhome.png" height="" width="300px" alt="" />
              </div>

              <div className="mr-4 rounded-lg p-3 bg-slate-400">
                <div className=" flex justify-between   mr-3 mt-3 p-3 rounded-xl  shadow-indigo-500   shadow">
                  <FaNodeJs className="hover:text-slate-300" />
                  <FaReact />

                  <FaReact />
                  <FaReact />
                  <FaReact />
                </div>
                <div className=" flex justify-between   mr-3   p-3 rounded-xl  shadow-indigo-500 shadow mb-2">
                  <FaNodeJs />
                  <FaReact />
                  <FaReact />
                  <FaReact />
                  <FaReact />
                </div>
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
