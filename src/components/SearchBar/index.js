import React from 'react'
import { Search }from '@material-ui/icons/';
import styles from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div className={styles.search_bar}>
			<input type="text" placeholder="Search" />
			<Search />
		</div>
	)
}

export default SearchBar
