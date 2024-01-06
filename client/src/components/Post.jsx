import React from 'react';
import ImageSlider from './ImageSlider';
import LikeButton from './LikeButton';

const Post = ({ post }) => {
  return (
    <div>
      <p>User: {post.username}</p>
      <ImageSlider images={post.images} />
      <LikeButton postId={post.id} />
      <p>Likes: {post.likes}</p>
      {/* Other post details */}
    </div>
  );
};

export default Post;
