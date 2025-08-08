import React from 'react'
import { Link } from 'react-router-dom'

const Calendar = () => {
  return (
    <div className="container py-5">
      {/* Back to Home Button - Top */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-start">
          <Link to="/" className="btn btn-outline-secondary">
            חזור לעמוד הבית
          </Link>
        </div>
      </div>
      
      {/* Title */}
      <div className="row gy-2 mt-3">
        <h4>לוח שנה</h4>
      </div>

      {/* Calendar Container */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="overflow-hidden" style={{borderRadius: '0.375rem'}}>
            <iframe 
              title="לוח שנה"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJerusalem&src=aXcuamV3aXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aXcuanVkYWlzbSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXcuaXNsYW1pYyNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%234285F4&color=%237CB342&ctz=Asia%2FJerusalem&hl=he"
              width="100%"
              height="700px"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
