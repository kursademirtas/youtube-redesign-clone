import React from "react";
import styled from "styled-components";
import { Avatar, NameTitle, Text } from "./Styles";
import SubscribeButton from "./SubscribeButton";

const InfoContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  padding: 1rem;
`;
const InfoBody = styled.div`
  width: 80%;
  padding: 0.5rem;
`;
const About = styled.p`
  font-size: 14px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ChannelInfo = ({ author }) => {
  if (!author) return <h2>Loading...</h2>;

  const { name, about, subscribers, profile_picture } = author;

  return (
    <InfoContainer>
      <Avatar
        size={"60px"}
        src={`http://localhost:1337${profile_picture.url}`}
      />
      <InfoBody>
        <NameTitle>{name}</NameTitle>
        <About>{about}</About>
      </InfoBody>
      <SubscribeButton subscribers={subscribers} />
    </InfoContainer>
  );
};

export default ChannelInfo;
