import React from 'react'
import { Menu,  Videocam, Apps, Notifications }from '@material-ui/icons/';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import UserAvatar from '../UserAvatar';
import styles from './header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<Menu/>
			<Logo />
			<SearchBar />
			<div className={styles.menu_container}>
				<Videocam />
				<Apps />
				<Notifications />
			</div>
			<UserAvatar />
		</div>
	)
}

export default Header
