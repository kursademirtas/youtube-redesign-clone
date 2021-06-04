import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/API_URI";

const HomeVideosContext = React.createContext();

export function useHomeVideos() {
  return useContext(HomeVideosContext);
}

export function HomeVideosProvider({ children }) {
  const [homeVideos, setHomeVideos] = useState();
  const recommendVideos = [];

  //Generate random index for every category and push array. 
  const setRecommendedVideos = () => {
    homeVideos.map((category) => {
      const limit = category.videos.length;
      const idx = Math.floor(Math.random() * limit);
      recommendVideos.push(category.videos[idx]);
    });
  };

  const fetchData = async () => {
    await axios
      .get(`${API_URL}/categories`)
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
