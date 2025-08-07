import React from 'react'

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 text-center mb-5">About Us</h1>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    We create modern, fast, and reliable static websites that provide 
                    excellent user experiences across all devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Technology</h5>
                  <p className="card-text">
                    Built with React, Bootstrap, and Vite for optimal performance 
                    and developer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light rounded-3 p-4 my-5">
            <h3>Why Static Websites?</h3>
            <ul className="list-unstyled">
              <li className="mb-2">✅ <strong>Fast Loading:</strong> Pre-built pages load instantly</li>
              <li className="mb-2">✅ <strong>Secure:</strong> No server-side vulnerabilities</li>
              <li className="mb-2">✅ <strong>Scalable:</strong> Handle millions of visitors with ease</li>
              <li className="mb-2">✅ <strong>Cost-Effective:</strong> Minimal hosting costs</li>
              <li className="mb-2">✅ <strong>SEO Friendly:</strong> Search engines love static content</li>
            </ul>
          </div>

          <div className="text-center">
            <h4>Ready to get started?</h4>
            <p className="text-muted">Contact us to learn more about our services.</p>
            <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
