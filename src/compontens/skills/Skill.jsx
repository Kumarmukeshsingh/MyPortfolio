import React from "react";
import all_skills from "./skilldata.js";

function Skill() {
  const skill = all_skills;
  console.log(skill);
  return (
    <>
      <h1 className="mt-5 text-5xl text-center"> MY SKILL </h1>
      <hr className="bg-rose-600 h-1 ml-[40%] mr-[40%]" />
      <div className="bg-gradient-to-t from-orange-200 to-slate-500 m-8 shadow-2xl shadow-fuchsia-600 rounded-3xl  ">
        <div className=" grid grid-cols-3 gap-4 p-10 ">
          {skill.map((d, i) => {
            return (
              <div className="  " key={d.id}>
                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-8 bg-red-400  ">
                  <div className="rounded-full    ">
                    <img
                      className="w-full "
                      src={d.logo}
                      alt="Sunset in the mountains"
                    />

                    <h1 className="text-center font-bold text-xl">{d.name}</h1>
                  </div>

                  <div class=" mt-8">
                    {/* <div className="font-bold text-xl mb-2">{d.name}</div> */}
                    {/* <div>{d.category}</div> */}
                    <p>
                      Lorem ipsum dolor sit amet adipisicing elit. Fuga ratione
                      voluptates corrupti perspiciatis aut hic vel! Autem,
                      quidem. Adipisci, quod.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skill;
