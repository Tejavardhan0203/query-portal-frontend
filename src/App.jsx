import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QueryForm from "./components/QueryForm"
import AdminPanel from "./components/AdminPanel"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Query Submission Portal</h1>
        </header>

        <div className="app-content">
          <Routes>
            <Route path="/student" element={<QueryForm />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />

            <Route path="/" element={<QueryForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
