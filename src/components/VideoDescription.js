 import styled from 'styled-components';
import { NameTitle, Text, Row } from './Styles';

const Wrapper = styled.div`
	max-width:450px;
	margin-left:1rem;
	text-align:left;
	@media (max-width: 640px) {
    display: none;
  }

`

const VideoDescription = ({ title, description, view, time }) => {


	if(description.length > 300) {
		description = description.slice(0, 300) + '...'
	}

	return (
		<Wrapper>
			<NameTitle>{title}</NameTitle>
			<Text>{description}</Text>
			<Row>
				<Text>{view} views</Text>
				<Text>{time}</Text>
			</Row>
		</Wrapper>
	)
}

export default VideoDescription
