import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For a static site, you might want to integrate with a service like Formspree
    console.log('Form submitted:', formData)
    alert('Thank you for your message! (This is a demo form)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 text-center mb-5">Contact Us</h1>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Get in Touch</h5>
                  <p className="card-text mb-4">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                  
                  <div className="mb-3">
                    <h6>📧 Email</h6>
                    <p className="text-muted">contact@utilswebsite.com</p>
                  </div>
                  
                  <div className="mb-3">
                    <h6>📱 Phone</h6>
                    <p className="text-muted">+1 (555) 123-4567</p>
                  </div>
                  
                  <div className="mb-3">
                    <h6>📍 Address</h6>
                    <p className="text-muted">
                      123 Web Street<br />
                      Digital City, DC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Send Message</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
