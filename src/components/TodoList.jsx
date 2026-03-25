import React from 'react';

/**
 * TodoList component demonstrates:
 * 1. Mapping an array of objects to UI elements.
 * 2. Importance of the 'key' prop for React performance.
 * 3. Rendering a list with actions (UI only).
 */
const TodoList = () => {
  const tasks = [
    { id: 1, task: 'Learn React Props' },
    { id: 2, task: 'Master useState Hook' },
    { id: 3, task: 'Build a Counter App' },
    { id: 4, task: 'Understand Lists & Keys' },
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">Lists & Keys: Todo List</h2>
      <p className="text-muted">Efficiently rendering dynamic arrays of data.</p>
      
      <div style={{ marginTop: '20px', maxWidth: '500px' }}>
        {tasks.map((item) => (
          <div key={item.id} className="todo-item">
            <span style={{ fontWeight: 500, color: '#2d3436' }}>{item.task}</span>
            <button className="btn-premium btn-danger" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
              Delete
            </button>
          </div>
        ))}
      </div>
      
      <p style={{ fontSize: '0.8rem', marginTop: '20px', color: '#b2bec3' }}>
        <strong>Performance Tip:</strong> The <code>key</code> prop allows React to identify which items have changed, been added, or removed.
      </p>
    </section>
  );
};

export default TodoList;
