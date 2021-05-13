import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useChannelData } from "../context/channelContext";
import { menuItems } from '../lib/menuItems';
import MenuItem from "./MenuItem";

const SideBarContainer = styled.aside`
  width: 200px;
  height: 90vh;
  position: fixed;
  z-index: 10;
  background-color: white;
  top: 80px;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const SideBar = () => {
  const { pathname } = useLocation();
  const { channelData } = useChannelData();

  //If in video page dont show sidebar.
  if (pathname.includes("/video/")) return null;

  return (
    <SideBarContainer>
      <div>
        {menuItems.map((item, i) => {
          return <MenuItem key={i} Logo={item.logo} text={item.text} />;
        })}
      </div>
      <div>
        {channelData.map((channel) => {
          return (
            <Link to={{ pathname: `/channel/${channel.id}` }}>
              <MenuItem
                key={channel.id}
                text={channel.name}
                avatar={`http://localhost:1337${channel.profile_picture.url}`}
              />
            </Link>
          );
        })}
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
