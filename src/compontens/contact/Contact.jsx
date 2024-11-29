import React from "react";

function Contact() {
  return (
    <div className=" bg-gradient-to-t from-orange-200 to-slate-500 ">
      <div className=""></div>
      <div className="flex justify-center  bg-slate-300 ml-[35%] mr-[35%] border border-zinc-400  rounded-md ">
        <form action="post" className="m-10 ">
          <h1 className="ml-20"> CONTACT ME </h1>
          <hr className="bg-black h-0.5 mt-3 " />
          <div>
            <label htmlFor="">Name : </label>
            <input
              className="border border-zinc-400 rounded-md ml-8 pl-2 pr-2 mt-3 "
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""> Email : </label>
            <input
              className="border border-zinc-400 rounded-md ml-9 pl-2 pr-2 mt-3 "
              type="email"
            />
          </div>
          <label htmlFor="">Gender: </label>
          <input
            className="border border-zinc-400 rounded-md ml-7 pl-2 pr-2 mt-3"
            type="text"
          />
          <div>
            <label htmlFor=""> Phone No: </label>
            <input
              className="border border-zinc-400 rounded-md ml-3 pl-2 pr-2 mt-3"
              type="number"
            />
          </div>
          <button
            className=" bg-blue-600 flex  ml-28 p-1 pl-5 mt-3 border-1 border-zinc-400 rounded-md w-24"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
