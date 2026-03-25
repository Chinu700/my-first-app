import React, { useState } from 'react';

/**
 * ConditionalRendering component demonstrates:
 * 1. If/Else conditional rendering (using a function).
 * 2. Logical && operator for simple conditionals.
 * 3. Ternary operator for toggle states.
 * 4. Checkbox-based condition rendering.
 */
const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  const handleCheckboxChange = (event) => setShowSecret(event.target.checked);

  // 1. Function with If/Else logic (not inside JSX)
  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button className="btn-premium btn-danger" onClick={toggleLogin}>Sign Out (If/Else)</button>;
    } else {
      return <button className="btn-premium" onClick={toggleLogin}>Sign In (If/Else)</button>;
    }
  };

  return (
    <section className="section-card">
      <h2 className="section-title">Conditional Rendering</h2>

      {/* Auth Section */}
      <section style={{ marginBottom: '40px' }}>
        <h3>1. Authentication Flow</h3>
        <p className="text-muted">Explore different ways to handle UI state transitions.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '15px' }}>
          <div className="profile-card">
            <strong>If/Else Logic</strong>
            <div style={{ marginTop: '10px' }}>{renderAuthButton()}</div>
          </div>
          
          <div className="profile-card">
            <strong>Logical &&</strong>
            <div style={{ marginTop: '10px' }}>
              {isLoggedIn && <button className="btn-premium btn-danger" onClick={toggleLogin}>Logout</button>}
              {!isLoggedIn && <button className="btn-premium" onClick={toggleLogin}>Login</button>}
            </div>
          </div>
          
          <div className="profile-card">
            <strong>Ternary Operator</strong>
            <div style={{ marginTop: '10px' }}>
              <button 
                className={`btn-premium ${isLoggedIn ? 'btn-danger' : ''}`} 
                onClick={toggleLogin}
              >
                {isLoggedIn ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Message Section */}
      <section>
        <h3>2. Hidden Layers</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={showSecret} 
            onChange={handleCheckboxChange}
            style={{ width: '18px', height: '18px' }}
          />
          <span style={{ fontWeight: 600 }}>Reveal Secret Knowledge</span>
        </label>

        {showSecret && (
          <div className="secret-box">
             <span style={{ fontSize: '1.5rem' }}>✨</span> 
             <strong style={{ marginLeft: '10px', color: '#667eea' }}>Discovery:</strong> 
             React's declarative nature makes complex UI states predictable and easy to manage!
          </div>
        )}
      </section>
    </section>
  );
};

export default ConditionalRendering;
