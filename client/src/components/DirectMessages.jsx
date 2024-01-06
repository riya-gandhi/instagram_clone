// DirectMessages.js

import React, { useState, useEffect } from 'react';

const DirectMessages = () => {
  const [conversations, setConversations] = useState([]);

  // Fetch conversations/messages data from your backend API
  useEffect(() => {
    // Fetch conversations for the logged-in user from the backend
    fetch('YOUR_BACKEND_API/conversations')
      .then((response) => response.json())
      .then((data) => setConversations(data.conversations)) // Assuming conversations/messages are fetched as an array named 'conversations'
      .catch((error) => console.error('Error fetching conversations:', error));
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <h1>Direct Messages</h1>
      <div className="conversation-list">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="conversation">
            <p>Participant: {conversation.participant}</p>
            {/* Display last message, timestamp, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
