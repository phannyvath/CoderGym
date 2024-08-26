import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BgImage from "./assets/bg.png";
import Equipment from "./components/Equipments/Equipment";
import Banner from "./components/Banner/Banner";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <div style={bgStyle}>
        <Nav />
        <Hero />
      </div>
      <Equipment />
      <Banner />
    </div>
  );
};

export default App;
