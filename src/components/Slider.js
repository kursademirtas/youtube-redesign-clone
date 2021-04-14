import React, { useState } from 'react'
import styled from 'styled-components'

const Slider = ({ children }) => {

	const [ distance, setDistance ] = useState(0);

	const Slider = styled.div`
		display: flex;
		flex-wrap: nowrap;
		gap:40px;
		transform:${`translateX(${distance}px)`};
	`
	function next() {
		setDistance(distance-240)
	}
	function prev() {
		setDistance(distance+240)
	}

	return (
		<div className="">
			<button onClick={next} >next</button>
			<button onClick={prev} disabled={distance >= 0}>prev</button>
			<Slider>
				{children}
			</Slider>
		</div>

	)
}

export default Slider
