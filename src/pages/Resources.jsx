import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
  const resourceCategories = [
    {
      title: "Development Resources",
      icon: "bi-code-slash",
      color: "primary",
      resources: [
        { name: "React Documentation", url: "https://react.dev", description: "Official React docs and tutorials" },
        { name: "Bootstrap Components", url: "https://getbootstrap.com", description: "UI components and utilities" },
        { name: "Vite Guide", url: "https://vitejs.dev", description: "Fast build tool documentation" },
        { name: "AWS S3 Documentation", url: "https://docs.aws.amazon.com/s3/", description: "Static website hosting guide" }
      ]
    },
    {
      title: "Design Resources",
      icon: "bi-palette2",
      color: "success",
      resources: [
        { name: "Color Hunt", url: "https://colorhunt.co", description: "Beautiful color palettes" },
        { name: "Google Fonts", url: "https://fonts.google.com", description: "Free web fonts" },
        { name: "Bootstrap Icons", url: "https://icons.getbootstrap.com", description: "Free, high quality SVG icons" },
        { name: "Unsplash", url: "https://unsplash.com", description: "Free high-resolution photos" }
      ]
    },
    {
      title: "Learning Resources",
      icon: "bi-book",
      color: "warning",
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "Web development documentation" },
        { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Free coding bootcamp" },
        { name: "CSS-Tricks", url: "https://css-tricks.com", description: "Web design and development tips" },
        { name: "JavaScript.info", url: "https://javascript.info", description: "Modern JavaScript tutorial" }
      ]
    }
  ]

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <div className="mb-4">
            <i className="bi bi-collection display-1 text-success"></i>
          </div>
          <h1 className="display-4 mb-3">Resources</h1>
          <p className="lead text-muted">
            Curated collection of useful resources for developers and designers
          </p>
          <Link to="/" className="btn btn-outline-success">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Resources Categories */}
      <div className="row g-4">
        {resourceCategories.map((category, index) => (
          <div key={index} className="col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-transparent border-0 text-center pt-4">
                <i className={`${category.icon} display-5 text-${category.color} mb-3`}></i>
                <h4 className="card-title">{category.title}</h4>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="list-group-item border-0 px-0">
                      <div className="d-flex w-100 justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          <h6 className="mb-1">
                            <a 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                            >
                              {resource.name}
                              <i className="bi bi-box-arrow-up-right ms-2 small"></i>
                            </a>
                          </h6>
                          <p className="mb-1 small text-muted">{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="bg-light rounded-3 p-5 text-center">
            <h3>More Resources Coming Soon</h3>
            <p className="text-muted mb-4">
              We're constantly adding new resources to help you in your development journey. 
              Check back regularly for updates!
            </p>
            <div className="row g-3 justify-content-center">
              <div className="col-auto">
                <span className="badge bg-primary fs-6 px-3 py-2">APIs & Services</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-success fs-6 px-3 py-2">Templates</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-warning fs-6 px-3 py-2">Cheat Sheets</span>
              </div>
              <div className="col-auto">
                <span className="badge bg-info fs-6 px-3 py-2">Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Box */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="text-muted">
            Know a great resource? 
            <Link to="/contact" className="text-decoration-none ms-1">
              Let us know!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resources
