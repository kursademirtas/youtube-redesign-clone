import React from "react";
import { Link } from "react-router-dom";
import shortNumber from "short-number";
import styled from "styled-components";
import { API_URL } from "../lib/API_URI";
import toHHMMSS from "../lib/toHHMMSS";
import { VideoPreloader } from "./PreLoader";
import { Row } from "./Styles";

const Cover = styled.div`
  width: ${(props) => props.coverWidth};
  height: ${(props) => props.coverHeight};
  position: relative;
  margin-left: 2rem;
  @media (max-width: 640px) {
    width: 90%;
    height: 60vw;
    margin: 1rem auto;
  }
`;

const TimeLabel = styled.span`
  position: absolute;
  bottom: 3.5rem;
  right: 10px;
  padding:.5rem;
  background: #333333;
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 14px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 0.5rem 0;
  color: #19202c;
`;

const Text = styled.p`
  color: #c2c2c2;
  font-size: 14px;
  font-weight: 500;
`;

const VideoCover = ({ video, medium, large = false, withOutDescription }) => {
  const coverWidth = large ? "540px" : medium ? "350px" : "200px";
  const coverHeight = large ? "300px" : medium ? "300px" : "200px";


  if (!video) return <VideoPreloader width={coverWidth} height={coverHeight}/>;

  const { duration, title, views, time, author, cover, description, id } = video;

  const convertedDuration =  toHHMMSS(duration);
  console.log(!video);

  return (
    <Link to={{ pathname: `/video/${id}` }}>
      <Cover coverHeight={coverHeight} coverWidth={coverWidth}>
        <Photo src={cover.url}/>
        <TimeLabel>{convertedDuration}</TimeLabel>
        {!withOutDescription && (
          <Row>
            <Title>{title}</Title>
            <Text>{views ? shortNumber(views) : 0} views</Text>
          </Row>
        )}
      </Cover>
    </Link>
  );
};

export default VideoCover;
