import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useChannelData } from "../context/channelContext";
import { menuItems } from '../lib/menuItems';
import MenuItem from "./MenuItem";
import { NameTitle } from "./Styles";

const SideBarContainer = styled.aside`

  width: 200px;
  height: calc(100vh - 80px);
  position: fixed;
  padding:1rem;
  z-index: 10;
  background-color: white;
  top: 80px;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;
const BottomWrapper = styled.div`
  margin-top: .5rem;
  h3{
   padding:1rem;
  }
`
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
      <BottomWrapper>
        <h3>Subscriptions</h3>
        {channelData.map((channel) => {
          return (
            <Link key={channel.id} to={{ pathname: `/channel/${channel.id}` }}>
              <MenuItem
                key={channel.id}
                text={channel.name}
                avatar={channel.profile_picture.url}
              />
            </Link>
          );
        })}
      </BottomWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
