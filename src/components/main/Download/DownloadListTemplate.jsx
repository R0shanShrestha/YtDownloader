import fileDownload from "js-file-download";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

const DownloadListTemplate = ({
  thumbnail,
  title,
  ext,
  label,
  downloadLink,
}) => {
  return (
    <div className=" flex text-sm items-center justify-between p-1  gap-2 ">
      <div className="flex gap-2 lg:hidden max-w-[50px] max-h-[50px]">
        <img
          src={thumbnail}
          alt="not found"
          className="w-full h-full  object-cover"
        />
      </div>
      <p className="text-sm text-wrap ">
        {" "}
        {title} | {label}{" "}
      </p>
      <Link
        to={downloadLink ? downloadLink : "#"}
        target={downloadLink != null ? "_blank" : ""}
        className=" bg-slate-100 hover:bg-slate-200   p-2 rounded-md text-sm flex items-center gap-4"
      >
        <span className="hidden md:block">Download</span>{" "}
        <BiDownload size={20} />
      </Link>
    </div>
  );
};

export default DownloadListTemplate;
