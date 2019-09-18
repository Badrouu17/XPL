import React from "react";
import HomeNavbar from "./pieces/HomeNavbar";
const Home = () => {
  return (
    <div id="home">
      <HomeNavbar></HomeNavbar>
      <div className="home-content">
        <p
          className="home-content-title"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          SPACE XPLORER
        </p>
        <p
          className="home-content-author"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          TRAVEL AND EXPLORE THE UNIVERSE
        </p>
      </div>
    </div>
  );
};

export default Home;
