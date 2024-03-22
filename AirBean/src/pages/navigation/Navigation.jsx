import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <Link to="/menu">To menu</Link>
      <br />
      <Link to="/about">About the company</Link>
    </div>
  )
}

export default Navigation
