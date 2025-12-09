import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // For demo purposes accept any credentials and navigate to /home
    navigate('/home')
  }

  return (
    <div className="App">
      <header>
        <h1>Login</h1>
        <p>Please sign in to continue</p>
      </header>
      <main>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                Username
                <br />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                Password
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
