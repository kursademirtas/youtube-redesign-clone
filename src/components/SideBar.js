import React from "react";
import MenuItem from "./MenuItem";
import styled from 'styled-components';
import { useLocation } from "react-router";

import { useChannelData } from "../context/channelContext";
import {
  Games,
  Home,
  Whatshot,
  Subscriptions,
  LibraryBooks,
  History,
  WatchLater,
  Star,
  Favorite,
  MusicNote,
} from "@material-ui/icons/";


const SideBarContainer = styled.aside`
	padding:1rem;
	width: 200px;
	height: 90vh;
`

const SideBar = () => {

  const {pathname} = useLocation();
  const { channelData } = useChannelData();

  if(pathname.includes('/video/')) return null;
  
  const menuItems = [
    { logo: Home, text: "Home" },
    { logo: Whatshot, text: "Trending" },
    { logo: Subscriptions, text: "Subscriptions" },
    { logo: LibraryBooks, text: "LibraryBooks" },
    { logo: History, text: "History" },
    { logo: WatchLater, text: "WatchLater" },
    { logo: Star, text: "Favorite" },
    { logo: Favorite, text: "Liked videos" },
    { logo: MusicNote, text: "Music" },
    { logo: Games, text: "Games" },
  ];

  return (
    <SideBarContainer>
      <div>
        {menuItems.map((item, i) => {
          return <MenuItem key={i} Logo={item.logo} text={item.text} />;
        })}
      </div>
      <div>
        {channelData.map((channel) => {
          return <MenuItem key={channel.id} text={channel.name} avatar={`http://localhost:1337${channel.profile_picture.url}`}/>;
        })}
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
