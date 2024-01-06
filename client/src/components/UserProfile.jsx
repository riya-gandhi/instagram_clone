import React, { useState, useEffect } from 'react';
import '../styles/Home.css';


const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetch('YOUR_BACKEND_API/userProfile')
      .then((response) => response.json())
      .then((data) => setUserProfile(data))
      .catch((error) => console.error('Error fetching user profile:', error));
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <h2>{userProfile.username}</h2>
          <p>Email: {userProfile.email}</p>
          
          <div className="user-posts">
            {userProfile.posts.map((post) => (
              <div key={post.id} className="user-post">
                <img src={post.image} alt="User Post" />
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
