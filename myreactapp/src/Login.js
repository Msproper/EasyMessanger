import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Login = () => {
  const [formData, setFormData] = useState({ login: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.login) newErrors.login = 'Login is required'
    if (!formData.password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      //Here you would make your API call to authenticate the user
      console.log('Login submitted:', formData)
      //Redirect or show success message here
    }
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            className={`form-input ${errors.login ? 'error' : ''}`}
            required
          />
          {errors.login && (
            <span className="error-message">{errors.elogin}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password ? 'error' : ''}`}
            required
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
