import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Home Feed</h1>
      <div className="posts">
        {
          posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt="Post" />
            <p>{post.caption}</p>
          </div>
        ))
    }
      </div>
    </div>
  );
};

export default Home;
