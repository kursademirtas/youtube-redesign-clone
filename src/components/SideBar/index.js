import React from "react";
import MenuItem from "../MenuItem";
import styles from "./SideBar.module.css";
import { useChannelData } from "../../context/channelContext";

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

const SideBar = () => {
  const { channelData } = useChannelData();

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
    <aside className={styles.sideBar}>
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
    </aside>
  );
};

export default SideBar;
