import React, { useRef, useEffect } from 'react';

/**
 * AutoFocusForm component demonstrates:
 * 1. useRef hook for direct DOM access.
 * 2. Automatically focusing an input element on page load (via useEffect).
 * 3. Triggering focus manually with a button.
 */
const AutoFocusForm = () => {
  // 1. Create a ref to store a reference to the input element
  const inputRef = useRef(null);

  // 2. Focus the input element when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array means this runs once on load

  const handleManualFocus = () => {
    // 3. Accessing the DOM element directly via .current
    inputRef.current.focus();
  };

  return (
    <section className="section-card">
      <h2 className="section-title">useRef Hook: Auto Focus</h2>
      <p className="text-muted">Direct DOM access for enhanced user experience.</p>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px', maxWidth: '500px' }}>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="I focused automatically!" 
          className="input-premium"
        />
        <button className="btn-premium" onClick={handleManualFocus} style={{ whiteSpace: 'nowrap' }}>
          Focus Now
        </button>
      </div>
      
      <p style={{ fontSize: '0.85rem', marginTop: '15px', color: '#636e72', fontStyle: 'italic' }}>
        <strong>Mechanism:</strong> The `useEffect` hook triggers `inputRef.current.focus()` immediately after the initial render.
      </p>
    </section>
  );
};

export default AutoFocusForm;
