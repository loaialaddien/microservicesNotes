import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId,newComment,setNewComment }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:5000/posts/${postId}/comments`
    );
    setComments(res.data);
    setNewComment(false);
  };

  useEffect(() => {
    fetchData();
  }, [newComment]);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
