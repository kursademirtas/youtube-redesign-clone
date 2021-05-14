import React, { useState } from "react";
import Comment from "./Comment";
import axios from "axios";

const Comments = ({ comments }) => {
  const [commentText, setCommentText] = useState("");
  const commentsCount = comments.length;

  const postComment = ({ comment }) => {
    axios
      .post("http://localhost:1337/comments", {
        comments: 'sadfaasd',
		likes:0,
		dislikes:0,
        author: 4
      })
      .then((response) => {
        console.log(response);
      });
  };

  function handleSubmit (e)  {
	  e.preventDefault();
	  postComment('hrthrt');
	  setCommentText('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a public comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit" disabled={!commentText} onClick={e => handleSubmit(e)}>
        COMMENT
      </button>
      <h3>{commentsCount} Comments </h3>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
