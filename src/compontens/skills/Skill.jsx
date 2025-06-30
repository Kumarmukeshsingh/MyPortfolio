import React from "react";
import skills from "./skill/assets/all_product";

function Skill() {
  const skill = skills;
  return (
    <div>
      <h1 className="mt-5 text-5xl text-center"> MY SKILL </h1>
      <hr className="bg-rose-600 h-1 mt-2 " />
      <div className=" grid grid-cols-4 gap-4 ">
        {skill.map((d, i) => {
          return (
            <div className="  " key={d.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                <img
                  className="w-full "
                  src={d.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{d.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
