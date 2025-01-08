import React from "react";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="border  bg-white text-slate-800 w-full p-3 flex justify-around items-center">
      <div>
        <h1 className="font-bold text-xl">Youtube Video Downloader</h1>
      </div>
      <div>
        <button className="border p-2.5 bg-slate-800 text-slate-50  rounded-xl text-sm">
          <BiMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
