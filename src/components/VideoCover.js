import React from "react";
import styled from "styled-components";

const VideoCover = ({ photo, large=false, duration, title, view, time, author }) => {

  const coverWidth = large ? "540px" : "200px";
  const coverHeight = large ? "300px" : "200px";

  const Cover = styled.div`
    width: ${coverWidth};
    height: ${coverHeight};
    position: relative;
  `;

  const TimeLabel = styled.span`
    position: absolute;
    bottom:25%;
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
    height:calc(100% - 50px);
    border-radius: 14px;
  `;

  const Row = styled.div`
    display:flex;
    justify-content:space-between;
  `

  const Title = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    padding:0.5rem 0;
    color: #19202c;
  `;

  const Text = styled.p`
	color:#c2c2c2;
	font-size:13px;
  `

  return (
    <Cover>
      <Photo
        src={
          "https://res.cloudinary.com/dlt51mt3f/image/upload/v1618339164/pictureForYoutube/image1_cecnc0.png"
        }
      />
      <TimeLabel>4:15</TimeLabel>
      <Title>A Brief History Of Creation </Title>
      <Row>
        <Text>80k views</Text>
        <Text>Dollie Blair</Text>
      </Row>
	 
    </Cover>
  );
};

export default VideoCover;
