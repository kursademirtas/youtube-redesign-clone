import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

import UserAvatar from "../components/UserAvatar";
import SubscribeButton from "../components/SubscribeButton";
import ChannelNav from "../components/ChannelNav";
import Slider from "../components/Slider";
import VideoCover from "../components/VideoCover";
import HighlightedVideoCover from "../components/HighlightedVideoCover";
import { API_URL } from "../lib/API_URI";

const Layout = styled.div`
  max-width: calc(100vw - 200px);
  margin-left: 232px;

  @media only screen and (max-width: 1023px) {
    margin-left: 0;
    max-width: 100vw;
  }
`;
const Banner = styled.img`
  width: 100%;
  height: 200px;
  margin: 1rem 0;
`;

const Row = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
`;

const ChannelPage = () => {
  const { channelID } = useParams();
  const [channelData, setChannelData] = useState(null);

  const fetchChannelByID = async (id) => {
    axios.get(`${API_URL}/channels/${id}`).then(function (response) {
      setChannelData(response.data);
    });
  };

  useEffect(() => {
    fetchChannelByID(channelID);
  }, [channelID]);

  if (!channelData) return <h2>Loading...</h2>;

  const {
    banner,
    about,
    name,
    verified,
    profile_picture,
    subscribers,
    videos,
  } = channelData;

  const indexOfHighLigthVideo = Math.floor(Math.random() * videos.length);
  const highLightVideo = videos[indexOfHighLigthVideo];


  return (
    <Layout>
      <Banner src={banner.url} alt={name + 'youtube banner picture'} />
      <Row>
        <UserAvatar
          url={profile_picture.url}
          name={name}
          subscribers={subscribers}
        />
        <SubscribeButton subscribers={subscribers} />
      </Row>
      <ChannelNav />
      <HighlightedVideoCover video={highLightVideo} />
      <Slider withOutName>
        {videos.map((video) => {
          return <VideoCover video={video} />;
        })}
      </Slider>
    </Layout>
  );
};

export default ChannelPage;
