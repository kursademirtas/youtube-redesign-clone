import React from "react";
import styled from "styled-components";
import { VideoPreloader } from "./PreLoader";

const Player = styled.video`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin: 0 auto;
`;

const VideoPlayer = ({ video }) => {
  if (!video) return <VideoPreloader width='900px' height='500px'/>;
  const { url } = video;

  return (
    <Player controls preload="none" poster={video}>
      <source src="video.mp4" type="video/mp4"></source>
    </Player>
  );
};

export default VideoPlayer;
