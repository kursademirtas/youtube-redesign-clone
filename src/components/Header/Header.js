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
			<Videocam />
			<Apps />
			<Notifications />
			<UserAvatar />
		</div>
	)
}

export default Header
