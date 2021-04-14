import React from 'react'
import styles from './HomePage.module.css'
import VideoCover from '../components/VideoCover';
import Slider from '../components/Slider';

const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<Slider>
				<VideoCover />
				<VideoCover />
				<VideoCover />
				<VideoCover />
				<VideoCover />
				<VideoCover />
				<VideoCover />
			</Slider>
			<div className={styles.largeCovers}>
				<VideoCover large/>
				<VideoCover large/>
			</div>
			<div className={styles.covers}>
				<VideoCover />
			</div>
		</div>
	)
}

export default HomePage;
