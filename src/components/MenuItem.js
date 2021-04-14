import React from 'react'
import styled from 'styled-components';

const MenuItem = ({ Logo, text}) => {

	const Container = styled.div`
		display:flex;
		align-items:center;
		padding:0.5rem;
		color:#898989;
		font-weight:400;

		p {
			margin-left:10px;
		}
	`



	return (
		<Container>
			<Logo />
			<p>{ text }</p>	
		</Container>
	)
}

export default MenuItem
