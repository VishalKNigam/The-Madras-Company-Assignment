import React from "react";
import laptop from "../assets/laptop.svg";
const Experts = () => {
  return (
    <div className="max-w-[1240px] border p-2 mx-auto my-10 md:grid grid-cols-2 border">
      <div className="border col-span-1 w-[80%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">Learn from Experts</h1>
        <p className="my-2 text-justify">
          Explore cutting-edge laptops at SwiftTech: sleek designs, powerful
          processors, vivid displays. Unleash productivity and gaming potential.
          Affordable prices await!
        </p>
        <button className="w-[30%] text-white bg-[black] rounded p-1">Get Started</button>
      </div>
    </div>
  );
};

export default Experts;
