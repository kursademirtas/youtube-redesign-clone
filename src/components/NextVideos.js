import React from 'react'
import styled from 'styled-components'
import VideoCover from './VideoCover'

const Container = styled.div`
	width:100%;
	padding:1rem;
`
const VideosWrapper = styled.div`

`

const NextVideos = ({videos}) => {

	console.log(videos);
	if(!videos) return <p>Loading...</p>;
	return (
		<Container>
			<h2>Next</h2>
			<VideosWrapper>
				
				{videos?.map(item => {
					return(	<VideoCover video={item}/>)
				
				})}
			</VideosWrapper>
		</Container>
	)
}

export default NextVideos