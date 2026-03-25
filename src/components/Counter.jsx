import React, { useState } from 'react';

/**
 * Counter component demonstrates:
 * 1. useState hook for state management.
 * 2. Light Switch analogy (Toggle state).
 * 3. Counter app with multiple actions and constraints.
 */
const Counter = () => {
  // 1. Light Switch Analogy
  const [isLightOn, setIsLightOn] = useState(false);

  // 2. Counter App State
  const [count, setCount] = useState(0);

  const toggleLight = () => setIsLightOn(!isLightOn);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <section className="section-card">
      <h2 className="section-title">useState Exercises</h2>

      {/* Light Switch Section */}
      <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div>
          <h3>1. Light Switch Analogy</h3>
          <p className="text-muted">A toggle state that changes UI attributes.</p>
          <button className="btn-premium" onClick={toggleLight}>
            Switch {isLightOn ? 'OFF' : 'ON'}
          </button>
        </div>
        <div className={`light-bulb ${isLightOn ? 'light-on' : 'light-off'}`}>
          {isLightOn ? 'SHINING' : 'DIM'}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

      {/* Counter App Section */}
      <section>
        <h3>2. Interactive Counter</h3>
        <div style={{ fontSize: '3rem', fontWeight: 800, margin: '20px 0', color: '#2d3436' }}>
          {count}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-premium" onClick={increment}>Increment</button>
          <button className="btn-premium" onClick={decrement}>Decrement</button>
          <button className="btn-premium btn-danger" onClick={reset}>Reset</button>
        </div>
        {count === 0 && (
          <p style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '15px', fontWeight: 600 }}>
            ⚠️ Counter is at its minimum limit.
          </p>
        )}
      </section>
    </section>
  );
};

export default Counter;
