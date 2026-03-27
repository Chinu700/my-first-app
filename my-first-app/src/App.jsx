import './App.css';
import './Day2.css'; // Import the new premium styles
import Greeting from './components/Greeting';
import Card from './components/Card';
import Dashboard from './components/Dashboard';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import ConditionalRendering from './components/ConditionalRendering';
import TodoList from './components/TodoList';
import AutoFocusForm from './components/AutoFocusForm';

// ─── Exercise 3: JSX variable ───────────────────────────────────────────────
const name = "CKS";               // ← your name!

// ─── Exercise 3: Fruits array (map exercise) ────────────────────────────────
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];

function App() {
  return (
    <div className="app">

      {/* ── Day 1 Exercises ────────────────────────────────────────── */}
      <section className="day-section">
        <header className="day-header">
          <h1>Day 1: React Fundamentals</h1>
        </header>

        <section className="section">
          <h2>Hello, {name}! 🚀</h2>
          <div className="card-grid">
            <div className="profile-card">
              <h3>🍉 Favourite Fruits</h3>
              <ul style={{ paddingLeft: '20px' }}>
                {fruits.map((fruit) => (
                  <li key={fruit} style={{ margin: '8px 0' }}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Greetings from Greeting.jsx</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name={name} />
          </div>
        </section>

        <section className="section">
          <h3>Why React?</h3>
          <div className="card-grid">
            <Card
              title="⚡ Component-Based"
              description="Build encapsulated components that manage their own state."
            />
            <Card
              title="🔄 Declarative"
              description="Design views for each state, and React updates the DOM efficiently."
            />
            <Card
              title="📦 Reusable"
              description="Develop new features without rewriting old ones."
            />
          </div>
        </section>
      </section>

      {/* ── Day 2 Exercises ────────────────────────────────────────── */}
      <div className="day2-container">
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 900, 
            lineHeight: '1', /* Use relative units */
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 auto 10px auto'
          }}>
            Day 2: Advanced React Patterns
          </h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Mastering State, Props, Event Handling & Hooks
          </p>
        </header>

        <div style={{ display: 'grid', gap: '30px' }}>
          {/* Topic 1: Props & Functional Components */}
          <Dashboard />

          {/* Topic 2: useState Hook */}
          <Counter />

          {/* Topic 3: Event Handling */}
          <SearchBar />

          {/* Topic 4: Conditional Rendering */}
          <ConditionalRendering />

          {/* Topic 5: Lists & Keys */}
          <TodoList />

          {/* Topic 6: useRef Hook */}
          <AutoFocusForm />
        </div>
      </div>

    </div>
  );
}

export default App;
