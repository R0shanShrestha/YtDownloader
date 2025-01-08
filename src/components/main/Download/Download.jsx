import React, { useState } from "react";
import DownloadListTemplate from "./DownloadListTemplate";

const Download = ({ thumbnail, duration, title, videoFormats }) => {
  const [FormateType, setFormateType] = useState("video");

  return (
    <div className=" p-5 flex justify-center  gap-5  flex-col md:flex-row overflow-hidden">
      {/* ................................ */}
      <div className="thumbnail h-[150px] hidden lg:block  lg:w-[300px] lg:h-[200px] rounded-xl shadow-sm overflow-hidden shadow-white">
        <img src={thumbnail} alt="Not found" className="w-full h-full" />
      </div>
      {/* ................................ */}
      <div className="videoInfo flex flex-col gap-3   h-full p-2 lg:w-[500px]">
        <div className="flex h-full flex-col gap-1">
          <h1 className="text-xl lg:text-2xl text-slate-300 font-bold">
            Title: <span className="font-light capitalize">{title}</span>{" "}
          </h1>
          <p className="text-sm text-slate-400 font-bold">
            Duration:{" "}
            <span className="font-light text-slate-100">{duration}</span>
          </p>
        </div>
        <div className="border bg-white text-slate-800 rounded-md overflow-hidden h-full p-3 w-full">
          <div className="flex border-b pb-1 gap-5 h-full ">
            <h3
              className={`text-slate-800  transition-all duration-200 ${
                FormateType == "video" && "font-bold"
              } cursor-pointer`}
              onClick={() => {
                setFormateType("video");
              }}
            >
              Video
            </h3>
            <h1>|</h1>
            <h3
              onClick={() => {
                setFormateType("music");
              }}
              className={`text-slate-800  transition-all duration-200 ${
                FormateType == "music" && "font-bold"
              } cursor-pointer`}
            >
              Audio
            </h3>
          </div>
          <div className=" lg:p-3 w-full h-full">
            {/* Formats lists */}

            {}
            {FormateType == "video" &&
              videoFormats.video?.map((formats, dix) => (
                <DownloadListTemplate
                  key={dix}
                  thumbnail={thumbnail}
                  title={title}
                  quality={formats.quality}
                  label={formats.label}
                  downloadLink={formats.url}
                />
              ))}

            {FormateType == "music" &&
              videoFormats.audio?.map((formats, dix) => (
                <DownloadListTemplate
                  key={dix}
                  thumbnail={thumbnail}
                  title={title}
                  quality={formats.quality}
                  label={formats.label}
                  downloadLink={formats.url}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
