import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  const redirector = (url) => {
    window.location.href = url;
    return null;
  };

  return (
    <div className="border  w-full bottom-0 p-3 bg-white items-center flex justify-around text-slate-900">
      <h1>Youtube Video Download &copy; 2024</h1>
      <div className="flex gap-3  items-center p-2 text-xl">
        <span
          onClick={() => {
            redirector(
              "https://www.facebook.com/profile.php?id=61563787844223"
            );
          }}
          className="cursor-pointer"
        >
          <FaFacebook />
        </span>
        <span
          onClick={() => {
            redirector("https://www.instagram.com/lostinlyric_s/");
          }}
          className="cursor-pointer"
        >
          <FaInstagram />
        </span>

        <span
          className="cursor-pointer"
          onClick={() => {
            redirector();
          }}
        >
          <FaLinkedin />
        </span>
      </div>
    </div>
  );
};

export default Footer;
