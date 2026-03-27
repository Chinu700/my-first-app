import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData({ ...formData })
    // Optional: Reset form after submit
    // setFormData({ name: '', email: '', password: '' })
  }

  return (
    <div className="card">
      <h1>Welcome Back</h1>
      <p className="subtitle">Please enter your details to sign in</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>

      {submittedData && (
        <div className="data-display">
          <h3>Form Submitted Successfully!</h3>
          <div className="data-item">
            <span className="data-label">Name:</span>
            <span className="data-value">{submittedData.name}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Email:</span>
            <span className="data-value">{submittedData.email}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Password:</span>
            <span className="data-value">{"•".repeat(submittedData.password.length)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
