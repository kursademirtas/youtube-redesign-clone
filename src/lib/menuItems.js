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

export const menuItems = [
    { logo: Home, text: "Home" },
    { logo: Whatshot, text: "Trending" },
    { logo: Subscriptions, text: "Subscriptions" },
    { logo: LibraryBooks, text: "Library" },
    { logo: History, text: "History" },
    { logo: WatchLater, text: "WatchLater" },
    { logo: Star, text: "Favorite" },
    { logo: Favorite, text: "Liked videos" },
    { logo: MusicNote, text: "Music" },
    { logo: Games, text: "Games" },
  ];
  //Take first four element in the array.
  export const mobileMenuItems = menuItems.slice(0,4);
  
  //This is for channel page menu
  export const channelMenuItems = [
    "Home",
    "Videos",
    "Playlists",
    "Channels",
    "Discussions",
    "About",
  ]; 

  export const channelMobileMenuItems = channelMenuItems.slice(0,4);