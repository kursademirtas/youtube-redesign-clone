 import styled from 'styled-components';
import { NameTitle, Text, Row } from './Styles';

const Wrapper = styled.div`
	max-width:450px;
	margin-left:1rem;
	text-align:left;

`

const VideoDescription = ({ title, description, view, time }) => {


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
