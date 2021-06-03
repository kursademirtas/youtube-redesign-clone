import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../lib/API_URI";
//Similiar redux-createStore;
const ChannelDataContext = React.createContext();

export function useChannelData() {
  return useContext(ChannelDataContext);
}

export function ChannelDataProvider({ children }) {
  const [channelData, setChannelsData] = useState([]);
  
  //Search another solution for fetch data.
  const fetchData = async () => {
    axios.get(`${API_URL}/channels`)
		 .then(function (response) {
			 setChannelsData(response.data)
		 });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    channelData,
  };

  return (
    <ChannelDataContext.Provider value={value}>{children}</ChannelDataContext.Provider>
  );
}
