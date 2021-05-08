import styled from "styled-components";

import VideoCover from './VideoCover'
import VideoDescription from './VideoDescription'

const Wrapper = styled.div`
	display:flex;
`

const HighlightedVideoCover = ({ video }) => {

	const { duration, title, view, time, author, cover, description } = video;
	return (
		<Wrapper>
			<VideoCover video={video} large/>
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
