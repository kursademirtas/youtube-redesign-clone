import React from "react";
import styled from "styled-components";
import { Avatar } from "./Styles";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #898989;
  font-weight: 400;
  p {
    margin-left: 10px;
  }
  @media (max-width: 640px) {
    flex-direction:column;
  }
`;

const MenuItem = ({ Logo, text, avatar }) => {
  return (
    <Container>
      {Logo ? <Logo /> : <Avatar src={avatar} size="32px" />}
      <p>{text}</p>
    </Container>
  );
};

export default MenuItem;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  