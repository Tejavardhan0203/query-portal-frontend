import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"   // import external CSS

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true")
      navigate("/admin")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
