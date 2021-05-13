import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, NameTitle } from "./Styles";

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: all 1s;
  transform: ${(props) => props.translateX};
  padding: 0;
  @media (max-width: 640px) {
    flex-direction:column;
    margin-top:-4rem;
    padding:0;
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
  opacity: 0.24;
  color: white;
  border: none;
  margin-left: 10px;
  @media (max-width: 640px) {
    display:none;
  }
`;

const Wrapper = styled.div``;

const Slider = ({ children, withTitle }) => {
  const [distance, setDistance] = useState(0);

  function next() {
    setDistance(distance - 240);
  }

  function prev() {
    setDistance(distance + 240);
  }

  return (
    <div>
      <Container>
        <Wrapper style={!withTitle && { opacity: 0 }}>
          <Avatar />
          <NameTitle>Dollie Blair</NameTitle>
        </Wrapper>

        <Wrapper>
          <Button onClick={prev} disabled={distance >= 0}>
            &lt;
          </Button>
          <Button onClick={next} disabled={distance <= -800}>
            &gt;
          </Button>
        </Wrapper>
      </Container>
      <SliderContainer translateX={`translateX(${distance}px)`}>
        {children}
      </SliderContainer>
    </div>
  );
};

export default Slider;
