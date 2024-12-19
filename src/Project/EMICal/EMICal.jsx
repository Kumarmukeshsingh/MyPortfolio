import React, { useEffect, useState } from "react";

export default function EMICal() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = e.target.value;

    if (id == "principle") {
      setPrinciple(value);
    } else if (id == "interest") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };

  const calcuateEMI = () => {
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100; // month calculat
      const calPow = Math.pow(1 + r, years * 12);
      const amount = principle * ((r * calPow) / (calPow - 1));
      setEMI(Math.round(amount));
    }
  };

  useEffect(() => {
    calcuateEMI();
  }, [principle, interest, years]);

  return (
    <div className=" bg-green-300 flex justify-center  ">
      <div className=" bg-white m-20 p-5">
        <h1> EMI CALCULATER </h1>
        <div>
          <p>principle</p>
          <input
            type="number"
            id="principle"
            onChange={handleChange}
            className=" border border-gray-500 rounded-md p-1"
          />
          <p>interest</p>
          <input
            type="number"
            id="interest"
            onChange={handleChange}
            className="border border-gray-500 rounded-md p-1"
          />
          <p>years</p>
          <input
            type="number"
            id="years"
            onChange={handleChange}
            className="border border-gray-500 rounded-md p-1"
          />
        </div>
        <div className="mt-5">  the calculated value is : $ {emi}</div>
      </div>
    </div>
  );
}
