// Explore.js

import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [explorePosts, setExplorePosts] = useState([]);
  const [exploreUsers, setExploreUsers] = useState([]);

  // Fetch explore posts and users data from your backend API
  useEffect(() => {
    // Fetch explore posts
    fetch('YOUR_BACKEND_API/explore/posts')
      .then((response) => response.json())
      .then((data) => setExplorePosts(data.posts)) // Assuming explore posts are fetched as an array named 'explorePosts'
      .catch((error) => console.error('Error fetching explore posts:', error));

    // Fetch explore users
    fetch('YOUR_BACKEND_API/explore/users')
      .then((response) => response.json())
      .then((data) => setExploreUsers(data.users)) // Assuming explore users are fetched as an array named 'exploreUsers'
      .catch((error) => console.error('Error fetching explore users:', error));
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <h1>Explore</h1>
      <div className="explore-posts">
        <h2>Explore Posts</h2>
        {explorePosts.map((post) => (
          <div key={post.id} className="explore-post">
            <img src={post.image} alt="Explore Post" />
            <p>{post.caption}</p>
            {/* Other post details */}
          </div>
        ))}
      </div>
      <div className="explore-users">
        <h2>Explore Users</h2>
        {exploreUsers.map((user) => (
          <div key={user.id} className="explore-user">
            <p>{user.username}</p>
            {/* Other user details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
