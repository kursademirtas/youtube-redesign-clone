import React, { useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import styled from "styled-components";
import { Avatar } from "./Styles";
import { API_URL } from "../lib/API_URI";

const Form = styled.form`
  display: flex;

  input {
    width: 60%;
    margin: 0 2rem 0 1rem;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid lightgray;
  }

  button {
    cursor: pointer;
    background: #005793;
    color: white;
    border: none;
    letter-spacing: 1px;
    padding: 0 2rem;

    :hover {
      background: #1a649c;
    }

    :disabled {
      background: lightgray;
    }
  }
`;

const Comments = ({ comments, id, fetchVideoByID }) => {
  const [commentText, setCommentText] = useState("");
  const commentsCount = comments.length;

  const postComment = () => {
    axios
      .post(`${API_URL}/comments`, {
        text: commentText,
        likes: 0,
        dislikes: 0,
        author: 1,
        video: parseInt(id),
      })
      .then((response) => {
        console.log(response);
        fetchVideoByID(id);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    postComment();
    setCommentText("");
  }

 
  return (
    <div>
      <Form>
        <Avatar size="48px" />
        <input
          type="text"
          placeholder="Add a public comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          disabled={!commentText}
          onClick={(e) => handleSubmit(e)}
        >
          COMMENT
        </button>
      </Form>

      <h3>{commentsCount} Comments </h3>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
