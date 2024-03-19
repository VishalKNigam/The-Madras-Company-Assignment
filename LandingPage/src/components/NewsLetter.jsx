import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to learn latest I.T. Skills</h1>
          <span className="text-white">Sign-up to our Newsletter and and stay up-to date</span>
        </div>
        <div className="m-2">
          <input type="text" placeholder="Enter your data" className="sm:w-full rounded mb-2 mr-2 p-3 text-slate-600"/>
          <button className="bg-[black] text-white p-3 rounded">Get Started</button>
          <br />
          <p className="text-white">
            We are bond to protect your data. Read our <br />
            <a href="#" className="text-[black] underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
