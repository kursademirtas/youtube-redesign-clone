import styled from "styled-components";
import { channelMenuItems } from "../lib/menuItems";

const Wrapper = styled.ul`
  display: flex;
  height: 50px;
  width: 100%;
  padding: 1rem;
`;
const MenuItem = styled.li`
  list-style: none;
  padding: 1rem;
  font-size: 18px;
  line-height: 23px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: red;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s;
    transform-origin: left;
  }
  :hover {
    color: red;
  }
  :hover::before {
    opacity: 1;
  }
`;

const ChannelNav = () => {
  return (
    <Wrapper>
      {channelMenuItems.map((item) => {
        return <MenuItem>{item}</MenuItem>;
      })}
    </Wrapper>
  );
};

export default ChannelNav;
