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
  padding:.5rem;
`;

const ChannelInfo = ({ author }) => {
  if (!author) return <h2>Loading...</h2>;

  const { name, about,subscribers,profile_picture } = author;
	console.log(profile_picture);
  return (
    <InfoContainer>
      <Avatar size={"60px"} src={`http://localhost:1337${profile_picture.url}`}/>
      <InfoBody>
        <NameTitle>{name}</NameTitle>
        <Text>{about}</Text>
      </InfoBody>
      <SubscribeButton subscribers={subscribers} />
    </InfoContainer>
  );
};

export default ChannelInfo;
