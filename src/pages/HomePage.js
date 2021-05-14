import React from "react";
import VideoCover from "../components/VideoCover";
import Slider from "../components/Slider";
import styles from "./HomePage.module.css";
import { useHomeVideos } from "../context/homeVideoContext";

const HomePage = () => {

  const { homeVideos, recommendVideos } = useHomeVideos();
  if (!homeVideos) return <h2>Loading...</h2>;

  return (
    <div className={styles.homePage}>
      <Slider channelName='Recommended' large >
        {recommendVideos.map((video) => {
          return <VideoCover key={video.id}  video={video} large />;
        })}
      </Slider>
      {homeVideos.map((category, i) => {
        console.log(category.name);
        return (
          <Slider key={i} channelName={category.name} >
            {category.videos.map((video) => {
              return <VideoCover key={video.id} video={video} />;
            })}
          </Slider>
        );
      })}
    </div>
  );
};

export default HomePage;
