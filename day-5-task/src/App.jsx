import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="title">Digital User Directory</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
