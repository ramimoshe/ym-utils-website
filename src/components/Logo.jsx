import React from 'react'

const Logo = ({ className = "navbar-brand" }) => {
  return (
    <div className={className}>
      <span className="fw-bold">Utils Website</span>
    </div>
  )
}

export default Logo
