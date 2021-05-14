import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Avatar, NameTitle } from "./Styles";

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: all 1s;
  transform: ${(props) => props.translateX};
  padding: 0;
  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: -4rem;
    padding: 0;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 80vw;
  padding: 2rem;
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.7;
  color: white;
  border: none;
  margin-left: 10px;
  :disabled {
    opacity: 0.2;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

const Slider = ({ children, channelName, large }) => {
  // get video cover count and width a cover after calculate distance limit.
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const elementWidth = large ? 540 : 240;
  const [screenWidth, setScreenWidth] = useState(null);
  const [elementCount, setElementCount] = useState(0);
  const limit = elementWidth * elementCount * -1 + (screenWidth - 150);

  useEffect(() => {
    setElementCount(sliderRef.current.childElementCount);
    setScreenWidth(containerRef.current.offsetWidth);
  }, [sliderRef.current]);

  const [distance, setDistance] = useState(0);

  function next() {
    setDistance(distance - elementWidth);
  }

  function prev() {
    setDistance(distance + elementWidth);
  }

  return (
    <div>
      <Container ref={containerRef}>
        <Wrapper>
          <Avatar />
          <NameTitle>{channelName}</NameTitle>
        </Wrapper>

        <Wrapper>
          <Button onClick={prev} disabled={distance >= 0}>
            &lt;
          </Button>
          <Button onClick={next} disabled={distance <= limit}>
            &gt;
          </Button>
        </Wrapper>
      </Container>
      <SliderContainer ref={sliderRef} translateX={`translateX(${distance}px)`}>
        {children}
      </SliderContainer>
    </div>
  );
};

export default Slider;
