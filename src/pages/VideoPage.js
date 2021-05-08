import styled from "styled-components";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router";
import axios from "axios";
import { NameTitle, Text } from "../components/Styles";
import { ThumbDown, ThumbUpAlt, Share, Tune } from "@material-ui/icons/";
import ChannelInfo from "../components/ChannelInfo";
import NextVideos from "../components/NextVideos";

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const VideoPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const VideoInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: lightgray 1px solid;
  padding-bottom: 1rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: #ebebeb;
  color: #192646;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-left: 0.5rem;
`;

const VideoPage = () => {
  const { videoID } = useParams();
  const [videoData, setVideoData] = useState({});

  const fetchVideoByID = async (id) => {
    await axios
      .get(`http://localhost:1337/videos/${id}`)
      .then(function (response) {
        setVideoData(response.data);
      });
  };

  useEffect(() => {
    fetchVideoByID(videoID);
  }, []);

  const { title, description, views, time, author,videos } = videoData;
 
  return (
    <PageWrapper>
      <VideoPageContainer>
        <VideoPlayer />
        <NameTitle>{title}</NameTitle>
        <VideoInfoWrapper>
          <Text>{views} views</Text>
          <ButtonWrapper>
            <Button>
              <ThumbUpAlt color="primary" />
              1k
            </Button>
            <Button>
              <ThumbDown color="primary" />
              23
            </Button>
            <Button>
              <Share color="primary" />
            </Button>
          </ButtonWrapper>
        </VideoInfoWrapper>
        <ChannelInfo author={author} />
      </VideoPageContainer>
      <NextVideos videos={videos}/>
    </PageWrapper>
  );
};

export default VideoPage;
