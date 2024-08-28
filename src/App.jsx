import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BgImage from "./assets/bg.png";
import Equipment from "./components/Equipments/Equipment";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner2/Banner2";
import Footer from "./components/Footer/Footer";

// Define Banner Data
const BannerData = {
  image: Img1,
  title: "The Importance of Taking Care of Yourself",
  subtitle:
    "It is crucial to focus on your health and well-being. Learn about the best practices to keep yourself in good shape.",
  link: "#",
};

const Banner2Data = {
  image: Img2,
  title: "Fitness and Wellness",
  subtitle:
    "Explore the ways fitness and wellness can improve your physical and mental health. Join our programs to stay fit.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Nav />
        <Hero />
      </div>
      <Equipment />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
