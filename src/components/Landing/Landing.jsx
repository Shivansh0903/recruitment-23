import React from "react";
import Logo from "./Assests/Logo.png";
import { directive } from "@babel/types";

const Landing = () => {
  return (
    <div className="h-screen bg-black text-white p-10 mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <span>
              <img
                src={Logo}
                alt="SQCC Club Logo"
                className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
              />
            </span>
            <span>
              <h2 className="ml-4  font-bold text-xl ">
                SRM QUANTUM COMPUTING CLUB
              </h2>
            </span>
          </div>
          <div className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 cursor-pointer items-center border-b-4 border-blue-700 hover:border-blue-500 rounded"><a href="https://forms.gle/k2YQrn623WpfwiDN8">Apply</a></div>
        </div>

        <div className="mt-60 mx-auto">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            RECRUITMENTS 2023
          </h1>
          <p className="mt-16 w-2/3 ">{/* {text} */}</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
