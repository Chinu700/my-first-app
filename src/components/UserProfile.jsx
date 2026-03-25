import React from 'react';

/**
 * UserProfile component demonstrates:
 * 1. Functional component structure.
 * 2. Destructuring props.
 * 3. Default prop values using destructuring.
 */
const UserProfile = ({ username, age, isAdmin = false }) => {
  return (
    <div className={`profile-card ${isAdmin ? 'admin' : ''}`}>
      <h3>User Profile</h3>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Role:</strong> {isAdmin ? 'Administrator' : 'User'}</p>
    </div>
  );
};

export default UserProfile;
