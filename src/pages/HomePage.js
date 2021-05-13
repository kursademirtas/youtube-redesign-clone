import React from "react";
import VideoCover from "../components/VideoCover";
import Slider from "../components/Slider";
import styles from "./HomePage.module.css";
import { useHomeVideos } from "../context/homeVideoContext";

const HomePage = () => {
  const { homeVideos, recommendVideos } = useHomeVideos();

  console.log(recommendVideos);
  if (!homeVideos) return <h2>Loading...</h2>;

  return (
    <div className={styles.homePage}>
      <Slider>
        {recommendVideos.map((video) => {
          return <VideoCover large video={video} />;
        })}
      </Slider>
      {homeVideos.map((category) => {
        return (
          <Slider>
            {category.videos.map((video) => {
              return <VideoCover video={video} />;
            })}
          </Slider>
        );
      })}
    </div>
  );
};

export default HomePage;
