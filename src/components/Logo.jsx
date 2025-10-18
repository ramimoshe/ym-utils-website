import React from 'react'
import logoImage from '/LOGO_G2.png'

const Logo = ({ className = "navbar-brand", size = "medium" }) => {
  // Size configurations
  const sizeConfig = {
    small: { maxWidth: '120px', height: 'auto' },
    medium: { maxWidth: '200px', height: 'auto' },
    large: { maxWidth: '300px', height: 'auto' },
    modal: { maxWidth: '200px', height: 'auto' }
  }

  const logoStyle = sizeConfig[size] || sizeConfig.medium

  return (
    <div className={className}>
      <img 
        src={logoImage} 
        alt="יואב הובלות ואחסנה" 
        style={logoStyle}
        className="img-fluid"
      />
    </div>
  )
}

export default Logo
