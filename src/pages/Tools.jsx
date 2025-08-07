import React from 'react'
import { Link } from 'react-router-dom'

const Tools = () => {
  const tools = [
    {
      title: "Password Generator",
      description: "Generate secure passwords with customizable options",
      icon: "bi-shield-lock",
      color: "primary"
    },
    {
      title: "QR Code Generator", 
      description: "Create QR codes for URLs, text, and more",
      icon: "bi-qr-code",
      color: "success"
    },
    {
      title: "Color Palette Generator",
      description: "Generate beautiful color palettes for your projects",
      icon: "bi-palette",
      color: "warning"
    },
    {
      title: "Text Formatter",
      description: "Format and transform text in various ways",
      icon: "bi-type",
      color: "info"
    },
    {
      title: "Unit Converter",
      description: "Convert between different units of measurement",
      icon: "bi-calculator",
      color: "secondary"
    },
    {
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings",
      icon: "bi-code-square",
      color: "dark"
    }
  ]

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <div className="mb-4">
            <i className="bi bi-tools display-1 text-primary"></i>
          </div>
          <h1 className="display-4 mb-3">Tools & Utilities</h1>
          <p className="lead text-muted">
            A collection of useful tools to help with your daily tasks
          </p>
          <Link to="/" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="row g-4">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 tool-card">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className={`${tool.icon} display-4 text-${tool.color}`}></i>
                </div>
                <h5 className="card-title">{tool.title}</h5>
                <p className="card-text text-muted mb-4">
                  {tool.description}
                </p>
                <button className={`btn btn-${tool.color} btn-sm`}>
                  Try Tool
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="bg-light rounded-3 p-5">
            <h3>Need a Custom Tool?</h3>
            <p className="text-muted mb-4">
              Can't find what you're looking for? Let us know what tool you need and we'll consider adding it.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
