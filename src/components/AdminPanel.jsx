import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import './AdminPanel.css'   // Import CSS file

export default function AdminPanel(){
  const [rows,setRows] = useState([])
  const navigate = useNavigate()

  async function load(){ 
    const r = await api.get('/admin/queries'); 
    setRows(r.data) 
  }
  useEffect(()=>{ load() },[])

  async function setStatus(id, status){ 
    await api.patch(`/admin/queries/${id}/status`, { status }); 
    await load() 
  }

  function handleLogout(){
    navigate('/login') 
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {rows.map(q=>(
        <div key={q._id} className="query-card">
          <b>{q.name}</b> &lt;{q.email}&gt;
          <p>{q.question}</p>
          <small>
            {new Date(q.createdAt).toLocaleString()} — Status:{" "}
            <select
              value={q.status}
              onChange={(e) => setStatus(q._id, e.target.value)}
            >
              <option value="OPEN">Open</option>
              <option value="IN_PROGRESS">In-Progress</option>
              <option value="RESOLVED">Resolved</option>
            </select>
          </small>
        </div>
      ))}
    </div>
  )
}
