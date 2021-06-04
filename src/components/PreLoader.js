import styled from "styled-components";

export const VideoPreloader = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	max-width: 1000px;
	background: lightgray;
	border-radius: 12px;
	padding: 1rem;
	margin-left: 1rem;
`

const HomepageLoadersContainer = styled.div`
	max-width: 100%;
	display: flex;
	justify-content: space-around;
	   
`

export const HomepagePreLoader = () => {
	return (
		<div>
			
		</div>
	)
}

