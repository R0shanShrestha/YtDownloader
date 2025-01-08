import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Herosec from "./components/main/HeroSec/Herosec";
import Footer from "./components/Header/Footer";
import YoutubeContext from "./context/YoutubeContext";
const App = () => {
  return (
    <div className="h-screen no-scrollbar  flex flex-col justify-between border overflow-hidden overflow-y-scroll relative bg w-full text-white">
      <Header />
      <Herosec />
      <Footer />
    </div>
  );
};

export default App;
