import React from 'react';
import MenuItem from '../MenuItem';
import styles from './SideBar.module.css';

import { Games, 
		 Home, 
		 Whatshot, 
		 Subscriptions,
		 LibraryBooks,
		 History, 
		 WatchLater, 
		 Star,
		 Favorite,
		 MusicNote 
	}
	from '@material-ui/icons/';

const SideBar = () => {

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
		{ logo: Games, text: "Games" }
	]

	return (
		<aside className={styles.sideBar}>
			{menuItems.map(item => {
				return( 
					<MenuItem 
						Logo={item.logo}
						text={item.text}
					/>
				)
			})}
		</aside>
	)
}

export default SideBar;
