import styled from "styled-components";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router";
import axios from "axios";
import shortNumber from "short-number";
import { NameTitle, Text } from "../components/Styles";
import { ThumbDown, ThumbUpAlt, Share } from "@material-ui/icons/";
import ChannelInfo from "../components/ChannelInfo";
import NextVideos from "../components/NextVideos";
import Comments from "../components/Comments";
import { API_URL } from "../lib/API_URI";

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr auto;
  padding: 1rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const VideoPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
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
      .get(`${API_URL}/videos/${id}`)
      .then(function (response) {
        setVideoData(response.data);
      });
  };

  useEffect(() => {
    fetchVideoByID(videoID);
  }, [videoID]);

  const {
    title,
    description,
    views,
    time,
    author,
    videos,
    video,
    cover,
    likes,
    comments,
  } = videoData;


  return (
    <div>
      <PageWrapper>
        <VideoPageContainer>
          <VideoPlayer video={cover?.url} />
          <NameTitle>{title}</NameTitle>
          <VideoInfoWrapper>
            <Text>{views ? shortNumber(views) : 0} views</Text>
            <ButtonWrapper>
              <Button>
                <ThumbUpAlt color="primary" />
                {likes ? shortNumber(likes) : 0}
              </Button>
              <Button>
                <ThumbDown color="primary" />
                {shortNumber(Math.floor(Math.random() * likes))}
              </Button>
              <Button>
                <Share color="primary" />
              </Button>
            </ButtonWrapper>
          </VideoInfoWrapper>
          <ChannelInfo author={author} />
          { comments && <Comments comments={comments} id={videoID} fetchVideoByID={fetchVideoByID }/> }
        </VideoPageContainer>
        <NextVideos videos={videos} />
      </PageWrapper>
      
    </div>
  );
};

export default VideoPage;
