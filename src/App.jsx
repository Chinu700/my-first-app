import './App.css';
import Greeting from './components/Greeting';
import Card from './components/Card';

// ─── Exercise 3: JSX variable ───────────────────────────────────────────────
const name = "CKS";               // ← your name!

// ─── Exercise 3: Fruits array (map exercise) ────────────────────────────────
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];

// ─── Exercise 3 — Contrast box (imperative vs declarative) ──────────────────
//
//  IMPERATIVE (plain JS):
//    const btn = document.createElement('button');
//    btn.textContent = "Click me";
//    btn.style.background = "blue";
//    document.body.appendChild(btn);
//    btn.addEventListener('click', () => btn.style.background = "red");
//
//  DECLARATIVE (JSX below) — you DESCRIBE what the UI looks like; React
//  figures out how to update the DOM:

function App() {
  return (
    <div className="app">

      {/* ── Exercise 1: Changed heading ──────────────────────────────── */}
      <h1>My AI Journey Begins</h1>

      <hr />

      {/* ── Exercise 3: Render name variable ────────────────────────── */}
      <h2>Hello, {name}! 🚀</h2>

      {/* ── Exercise 3: Map through fruits array ─────────────────────── */}
      <section className="section">
        <h3>🍉 My Favourite Fruits</h3>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* ── Exercise 4: Greeting component used 3× ───────────────────── */}
      <section className="section">
        <h3>Greetings from Greeting.jsx</h3>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name={name} />
      </section>

      <hr />

      {/* ── Exercise 4: Card component — 3 React features ────────────── */}
      <section className="section">
        <h3>Why React?</h3>
        <div className="card-grid">
          <Card
            title="⚡ Component-Based"
            description="Build encapsulated components that manage their own state, then compose them to make complex UIs."
          />
          <Card
            title="🔄 Declarative"
            description="React makes it painless to create interactive UIs. Design views for each state, and React updates the DOM efficiently."
          />
          <Card
            title="📦 Learn Once, Write Anywhere"
            description="Develop new features without rewriting old ones. React can also render on the server or power native mobile apps."
          />
        </div>
      </section>
    </div>
  );
}

export default App;
