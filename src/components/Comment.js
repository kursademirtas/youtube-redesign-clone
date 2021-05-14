import styled from "styled-components";
import React from "react";
import { Avatar, NameTitle } from "./Styles";

const CommentContainer = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
`;

const CommentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  p {
    font-size: 18px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  span{
	  margin-left:10px;
	  font-size:10px;
	  
  }
`;

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <CommentContainer>
      <Avatar size={"48px"} />
      <CommentBodyWrapper>
        <Row>
          <h3>User Name</h3>
          <span>3 weeks ago</span>
        </Row>
        <p>{comment.comments}</p>
        <Row>
          <button>Like</button>
          <button>Dislike</button>
        </Row>
      </CommentBodyWrapper>
    </CommentContainer>
  );
};

export default Comment;
