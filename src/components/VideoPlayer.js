import React from "react";
import styled from "styled-components";

const Player = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
`;

const VideoPlayer = () => {
	return (
		<Player
			controls
			preload="none"
			poster="https://images.unsplash.com/photo-1620376165025-a807786689fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
		>
			<source src="video.mp4" type="video/mp4"></source>
		</Player>
	);
};

export default VideoPlayer;
