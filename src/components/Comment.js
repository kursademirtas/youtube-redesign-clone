import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Avatar } from "./Styles";
import axios from "axios";
import { ThumbDown, ThumbUpAlt } from "@material-ui/icons/";
import Moment from "react-moment";

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
  justify-content: center;
  width: fit-content;
  
  span {
    margin-left: 8px;
    font-size: 10px;
  }
  button {
    display: flex;
    align-items: center;
    margin-right: 5px;
    background: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    transition: all 0.2s;
    :hover {
      color: #005793;
    }
  }
`;

const Comment = ({ comment }) => {
  const [author, setAuthor] = useState("");

  const fetchCommentAuthor = async (id) => {
    await axios
      .get(`http://localhost:1337/channels/${id}`)
      .then(function (response) {
        setAuthor(response.data);
      });
  };

  useEffect(() => {
    fetchCommentAuthor(comment.author);
  }, [comment]);

  return (
    <CommentContainer>
      <Avatar
        size={"48px"}
        src={`http://localhost:1337${author?.profile_picture?.url}`}
      />
      <CommentBodyWrapper>
        <Row>
          <h3>{author?.name}</h3>
          <span>
            <Moment fromNow>{comment.updated_at}</Moment>
          </span>
        </Row>
        <p>{comment.text}</p>
        <Row>
          <button>
            <ThumbUpAlt fontSize="small" />
            <span>{comment.likes > 0 && comment.likes}</span>
          </button>
          <button>
            <ThumbDown fontSize="small" />
            <span>{comment.dislikes > 0 && comment.dislikes}</span>
          </button>
        </Row>
      </CommentBodyWrapper>
    </CommentContainer>
  );
};

export default Comment;
