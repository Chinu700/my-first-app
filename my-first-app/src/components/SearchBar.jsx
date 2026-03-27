import React, { useState } from 'react';

/**
 * SearchBar component demonstrates:
 * 1. Capturing text from an input using onChange.
 * 2. Real-time state updates.
 * 3. Event handling and target.value exploration.
 */
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    // event.target.value contains the current value of the input field
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <section className="section-card">
      <h2 className="section-title">Event Handling: Search Bar</h2>
      <p className="text-muted">Type something below to see it in real-time!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchText}
          onChange={handleChange}
          className="input-premium"
          style={{ marginBottom: '15px' }}
        />
        
        <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
          <label style={{ fontSize: '0.9rem', color: '#636e72', display: 'block', marginBottom: '5px' }}>
            Uppercase Output
          </label>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2d3436' }}>
            {searchText || 'NO INPUT...'}
          </span>
          <br />
          <span style={{ fontSize: '1rem', fontWeight: 700, color: '#667eea' }}>
            {searchText.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
