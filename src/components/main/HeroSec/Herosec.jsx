import React, { useContext, useRef } from "react";
import { BiCheck, BiDownload } from "react-icons/bi";
import Download from "../Download/Download";
import { YoutubeContextProvider } from "../../../context/YoutubeContext";
import { CgClose } from "react-icons/cg";
import ErrorCom from "../../Error/ErrorCom";

const Herosec = () => {
  const { isError, isloading, onFetch, Data } = useContext(
    YoutubeContextProvider
  );
  const urlInp = useRef();
  const downloadHandler = (e) => {
    onFetch(urlInp.current.value);
  };
  return (
    <div className=" my-10 p-5 flex justify-center w-full flex-col  items-center gap-10 ">
      {isError && <ErrorCom />}
      <div className="flex flex-col gap-10 lg:w-[80%] justify-center items-center  ">
        <h1 className="text-3xl font-bold text-center">
          Download Video and Audio from YouTube
        </h1>
        <div className=" border shadow-sm shadow-white flex rounded-md overflow-hidden bg-white text-slate-900 w-[80%]">
          <input
            ref={urlInp}
            type="text"
            className=" w-full p-2 lg:p-3 outline-none "
            placeholder="Past your link here ..."
          />
          <button
            onClick={(e) => {
              downloadHandler();
            }}
            className="text-2xl lg:text-3xl p-2 flex justify-center items-center bg-slate-900 w-[80px] text-white hover:bg-slate-800"
          >
            <BiDownload />
          </button>
        </div>
      </div>
      <div>
        {isloading ? (
          <h1 className="flex items-center text-xl ">
            Converting the url . . . 
          </h1>
        ) : (
          <h1 className="flex items-center text-xl ">
            Download anything from youtube
          </h1>
        )}
      </div>
      <div className="w-full">
        {Data !== "" && (
          <Download
            thumbnail={Data?.thumbnail}
            duration={Data?.durationLabel}
            title={Data?.title}
            videoFormats={{
              audio: Data?.audio_formats,
              video: Data?.video_formats,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Herosec;
