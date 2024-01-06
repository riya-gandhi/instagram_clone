import React, { useState } from 'react';
import { likePost, unlikePost } from '../services/api';

const LikeButton = ({ postId }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (liked) {
      unlikePost(postId); // Call API to unlike post
      setLiked(false);
    } else {
      likePost(postId); // Call API to like post
      setLiked(true);
    }
  };

  return (
    <button onClick={handleLikeClick}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
