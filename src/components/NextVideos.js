import React, { useState } from "react";
import styled from "styled-components";
import VideoCover from "./VideoCover";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: -1rem auto;
`;
const VideosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Row = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Title = styled.h3`
  text-align: center;
  margin-left: 20px;
`;

const NextVideos = ({ videos }) => {
  const [toggleOn, setToggleOn] = useState(false);


  function handleToggle() {
    setToggleOn(!toggleOn);
  }

  return (
    <Container>
      <Row>
        <Title>Next</Title>
        {toggleOn ? (
          <ToggleOnIcon
            style={{ color: "green" }}
            fontSize="large"
            onClick={handleToggle}
          />
        ) : (
          <ToggleOffIcon
            color="secondary"
            fontSize="large"
            onClick={handleToggle}
          />
        )}
      </Row>
      <VideosWrapper>
        {
          videos ?  videos?.map((item) => {
            return <VideoCover video={item} medium />;
          }) : <VideoCover medium/>
        }
      </VideosWrapper>
    </Container>
  );
};

export default NextVideos;
