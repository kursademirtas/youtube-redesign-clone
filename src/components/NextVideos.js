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
  margin:0 auto;
`;
const VideosWrapper = styled.div`
  width:100%;
 

`;
const Row = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const NextVideos = ({ videos }) => {
  const [toggleOn, setToggleOn] = useState(false);
  if (!videos) return <p>Loading...</p>;

  function handleToggle() {
    setToggleOn(!toggleOn);
  }

  return (
    <Container>
      <Row>
        <h2>Next</h2>
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
        {videos?.map((item) => {
          return <VideoCover video={item} medium />;
        })}
      </VideosWrapper>
    </Container>
  );
};

export default NextVideos;
