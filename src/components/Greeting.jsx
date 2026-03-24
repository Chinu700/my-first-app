// Exercise 4 — Greeting component
// Accepts a `name` prop and renders a personalised greeting.

function Greeting({ name }) {
  return <p className="greeting">👋 Hello, <strong>{name}</strong>!</p>;
}

export default Greeting;
