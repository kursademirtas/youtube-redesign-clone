import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { mobileMenuItems } from '../lib/menuItems';


const MenuContainer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 10;
  bottom: 0;

  @media (min-width: 640px) {
    display: none;
  }
`;

const MobileMenu = () => {
  return (
    <MenuContainer>
		{
			mobileMenuItems.map((item, i)=> {
				return(
					<MenuItem 
					key={i}
					Logo={item.logo}
					text={item.text}
					/>
				)
			})
		}

    </MenuContainer>
  );
};

export default MobileMenu;
