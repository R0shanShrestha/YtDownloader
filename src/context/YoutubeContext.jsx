import axios from "axios";
import React, { createContext, useState } from "react";

export const YoutubeContextProvider = createContext({
  Data: [],
  isloading: Boolean,
  isError: Boolean,
  onFetch: () => {},
});

const YoutubeContext = ({ children }) => {
  const [Data, setData] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  //   .......................................................

  const onFetch = async (url) => {
    setIsError(false);
    try {
      setIsloading(true);
      const res = await axios.get(import.meta.env.VITE_API_URL + url);
      console.log(res.data.data)
      if (res.data.data === null) {
        setData("")
        return null;
      }

      setData(res.data.data);
      setIsloading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsloading(false);
      setData("");
    }
  };

  return (
    <YoutubeContextProvider.Provider
      value={{ onFetch, Data, isError, isloading }}
    >
      {children}
    </YoutubeContextProvider.Provider>
  );
};

export default YoutubeContext;
