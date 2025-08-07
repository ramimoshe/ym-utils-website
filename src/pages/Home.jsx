import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section with Logo and Vertical Buttons */}
      <section className="hero-section py-5 min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              {/* Large Logo */}
              <div className="mb-5">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <rect width="120" height="120" rx="24" fill="url(#heroLogoGradient)" />
                  <path
                    d="M36 45h48v6H36v-6zm0 12h48v6H36v-6zm0 12h36v6H36v-6z"
                    fill="white"
                  />
                  <circle cx="90" cy="45" r="6" fill="white" />
                  <defs>
                    <linearGradient
                      id="heroLogoGradient"
                      x1="0"
                      y1="0"
                      x2="120"
                      y2="120"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#667eea" />
                      <stop offset="1" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="display-4 fw-bold mb-5">
                  יואב הובלות ואחסנה
                </h1>
              </div>

              {/* Vertical Buttons */}
              <div className="d-flex flex-column align-items-center gap-4">
                <Link to="/storage-calculator" className="text-decoration-none">
                  <button className="btn btn-light btn-lg px-5 py-3 shadow-lg" style={{minWidth: '300px'}}>
                    <i className="bi bi-calculator me-3"></i>
                    <span className="fs-4">חשב עלות אחסנה</span>
                  </button>
                </Link>
                
                <Link to="/calendar" className="text-decoration-none">
                  <button className="btn btn-outline-light btn-lg px-5 py-3 shadow-lg" style={{minWidth: '300px'}}>
                    <i className="bi bi-calendar me-3"></i>
                    <span className="fs-4">לוח שנה</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5">Features</h2>
              <p className="lead text-muted">Everything you need for a modern static website</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-lightning-charge fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Fast Performance</h5>
                  <p className="card-text">
                    Built with Vite for lightning-fast development and optimized production builds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-phone fs-1 text-success"></i>
                  </div>
                  <h5 className="card-title">Responsive Design</h5>
                  <p className="card-text">
                    Bootstrap ensures your website looks great on all devices and screen sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-cloud fs-1 text-info"></i>
                  </div>
                  <h5 className="card-title">Cloud Ready</h5>
                  <p className="card-text">
                    Optimized for deployment to AWS S3 with CDN support for global reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
