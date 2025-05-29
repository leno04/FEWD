import React from 'react';

export default function Profile({ username }) {
  return (
    <div style={{ marginTop: '30px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {username}</p>
      <p><strong>Email:</strong> {username.toLowerCase().replace(/\s/g, '')}@example.com</p>
      <p><strong>Member Since:</strong> May 2025</p>
    </div>
  );
}
