import React from "react";
import { Menu, Videocam, Apps, Notifications } from "@material-ui/icons/";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Avatar, Row } from "./Styles";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  z-index:10;
  background-color:white;
  position:fixed;
  top:0;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  padding: 0 1rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        {false && <Menu />}
        <Logo />
        <SearchBar />
      </Row>
     
      <Row>
        <MenuContainer>
          <Videocam />
          <Apps />
          <Notifications />
        </MenuContainer>
        <Avatar size="48px" />
      </Row>
    </HeaderContainer>
  );
};

export default Header;
