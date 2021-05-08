import React from "react";
import VideoCover from "../components/VideoCover";
import Slider from "../components/Slider";
import styles from "./HomePage.module.css";


const HomePage = () => {

	

  return (
    <div className={styles.homePage}>
      <Slider>
        <VideoCover />
        <VideoCover />
        <VideoCover />
        <VideoCover />
        <VideoCover />
        <VideoCover />
        <VideoCover />
      </Slider>
      <Slider>
        <VideoCover large />
        <VideoCover large />
      </Slider>
      <Slider>
        <VideoCover />
      </Slider>
    </div>
  );
};

export default HomePage;
