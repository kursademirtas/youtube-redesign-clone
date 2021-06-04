import React from "react";
import styled from "styled-components";
import { Avatar, NameTitle } from "./Styles";
import SubscribeButton from "./SubscribeButton";

const InfoContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content:space-between;
  padding:1rem 0;
`;
const InfoBody = styled.div`
  max-width: 70%;
  padding: 0.5rem;
`;
const Row = styled.div`
  display:flex;
`
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
      <Row>
      <Avatar
        size={"60px"}
        src={profile_picture.url}
      />
      <InfoBody>
        <NameTitle>{name}</NameTitle>
        <About>{about}</About>
      </InfoBody>
      </Row>
      <SubscribeButton subscribers={subscribers} />
    </InfoContainer>
  );
};

export default ChannelInfo;
