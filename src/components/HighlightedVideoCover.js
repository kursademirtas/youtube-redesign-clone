import styled from "styled-components";

import VideoCover from './VideoCover'
import VideoDescription from './VideoDescription'

const Wrapper = styled.div`
	display:flex;
	@media (max-width: 640px) {
    display:none;
  }
`

const HighlightedVideoCover = ({ video }) => {

	if(!video) return <h2>Loading...</h2>
	const {  title, view, time,  description } = video;
	return (
		<Wrapper>
			<VideoCover video={video} large withOutDescription/>
			<VideoDescription 
				title={title}
				description={description}
				view={view}
				time={time}
			/>
		</Wrapper>
	)
}

export default HighlightedVideoCover
