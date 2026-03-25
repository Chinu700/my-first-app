import React from 'react';
import UserProfile from './UserProfile';

/**
 * Dashboard component demonstrates:
 * 1. Rendering multiple components.
 * 2. Passing props of different types (string, number, boolean).
 */
const Dashboard = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">User Dashboard</h2>
      <div className="user-grid">
        <UserProfile username="Alice" age={25} isAdmin={true} />
        <UserProfile username="Bob" age={30} isAdmin={false} />
        <UserProfile username="Charlie" age={22} />
      </div>
    </section>
  );
};

export default Dashboard;
