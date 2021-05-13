import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const HomeVideosContext = React.createContext();

export function useHomeVideos() {
  return useContext(HomeVideosContext);
}

export function HomeVideosProvider({ children }) {
  const [homeVideos, setHomeVideos] = useState([]);
  const recommendVideos = [];

  const setRecommendedVideos = () => {
    homeVideos.map((category) => {
      const limit = category.videos.length;
      const idx = Math.floor(Math.random() * limit);
      recommendVideos.push(category.videos[idx]);
    });
  };

  //Search another solution for fetch data.
  const fetchData = async () => {
    await axios
      .get("http://localhost:1337/categories")
      .then(function (response) {
        setHomeVideos(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (homeVideos) {
    setRecommendedVideos();
  }

  const value = {
    homeVideos,
    recommendVideos,
  };

  return (
    <HomeVideosContext.Provider value={value}>
      {children}
    </HomeVideosContext.Provider>
  );
}