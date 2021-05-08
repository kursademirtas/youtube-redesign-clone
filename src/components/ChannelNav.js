import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  height: 50px;
`;
const MenuItem = styled.li`
  list-style: none;
  padding: 1rem;
  font-size: 18px;
  line-height: 23px;
  position: relative;
  cursor:pointer;
  transition:all 0.5s;

  ::before{
	  content:'';
	  position:absolute;
	  width:100%;
	  height:2px;
	  background-color:red;
	  bottom:0;
	  left:0;
	  opacity:0;
	  transition:all 0.5s;
	  transform-origin:left;
  }
  :hover {
	  color:red;
  }
  :hover::before{
	  opacity:1;
  }
`;

const ChannelNav = () => {
  const menuItems = [
    "Home",
    "Videos",
    "Playlists",
    "Channels",
    "Discussions",
    "About",
  ];
  return (
    <Wrapper>
      {menuItems.map((item) => {
        return <MenuItem>{item}</MenuItem>;
      })}
    </Wrapper>
  );
};

export default ChannelNav;
