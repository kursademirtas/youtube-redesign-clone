import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
//Similiar redux-createStore;
const ChannelDataContext = React.createContext();

export function useChannelData() {
  return useContext(ChannelDataContext);
}

export function ChannelDataProvider({ children }) {
  const [channelData, setChannelsData] = useState([]);
  
  //Search another solution for fetch data.
  const fetchData = async () => {
    axios.get("http://localhost:1337/channels")
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
