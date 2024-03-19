import React from "react";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[10px]">
      <div className="max-w-[1240px] py-[60px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl">Learn with us</div>
        <div className="text-white text-5xl md:text-[80px] md:p-[20px]">
          Grow with us
        </div>
        <div className="text-[20px] md:text-50px text-white md:p-[20px]">
          Learn
          <ReactTyped
            className="pl-3"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop = {true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
