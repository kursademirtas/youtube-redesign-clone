import { Description } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import VideoDescription from "./VideoDescription";

const Cover = styled.div`
  width: ${(props) => props.coverWidth};
  height: ${(props) => props.coverHeight};
  position: relative;

`;

const TimeLabel = styled.span`
  position: absolute;
  bottom: 25%;
  right: 10px;
  width: 47px;
  height: 24px;
  background: #333333;
  mix-blend-mode: normal;
  opacity: 0.3;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 13px;
`;

const VideoCover = ({ video, medium, large = false }) => {
  const coverWidth = large ? "540px"  : medium ? '350px' : "200px";
  const coverHeight = large ? "300px" : medium ? 'auto' : "200px";

  const { duration, title, view, time, author, cover, description } = video;

  return (
    <Cover coverHeight={coverHeight} coverWidth={coverWidth}>
      <Photo src={`http://localhost:1337${cover.url}`} />
      <TimeLabel>{`2.10`}</TimeLabel>
          <Title>{title}</Title>
          <Row>
            <Text>{view} views</Text>
            <Text>{author}</Text>
          </Row>
    </Cover>
  );
};

export default VideoCover;
