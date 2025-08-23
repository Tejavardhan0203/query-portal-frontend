import React, { useState } from 'react'
import api from '../api'
import './QueryForm.css'   // Import the CSS

export default function QueryForm() {
  const [form, setForm] = useState({ name: '', email: '', question: '' })
  const [msg, setMsg] = useState('')

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    setMsg('')
    try {
      await api.post('/queries', form)
      setMsg('✅ Query submitted!')
      setForm({ name: '', email: '', question: '' })
    } catch (err) {
      setMsg('❌ Failed to submit query')
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={submit} className="query-form">
        <h2>Submit Your Query</h2>
        {msg && (
          <p className={msg.includes('✅') ? 'success-msg' : 'error-msg'}>
            {msg}
          </p>
        )}

        <div>
          
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>

        <div>
          
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>

        <div>
          
          <textarea
            name="question"
            placeholder="Write your question..."
            value={form.question}
            onChange={onChange}
            rows={6}
            required
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}
