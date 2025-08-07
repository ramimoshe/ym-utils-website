import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-light mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
