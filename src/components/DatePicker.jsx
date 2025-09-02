import React, { useState, useRef, useEffect } from 'react'

const DatePicker = ({ 
  id, 
  name, 
  label, 
  value, 
  onChange, 
  error, 
  required = false,
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [displayValue, setDisplayValue] = useState('')
  const [currentDate, setCurrentDate] = useState(new Date()) // To control the displayed month/year
  const inputRef = useRef(null)
  const calendarRef = useRef(null)

  // Generate calendar days
  const generateCalendar = () => {
    const today = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000))
      days.push({
        date: date,
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === currentMonth,
        isToday: date.toDateString() === today.toDateString(),
        isSelected: value && date.toDateString() === new Date(value).toDateString()
      })
    }
    
    return {
      days,
      monthYear: firstDay.toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })
    }
  }

  const calendar = generateCalendar()

  // Month navigation
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // Update display value when value changes
  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setDisplayValue(date.toLocaleDateString('he-IL'))
      setCurrentDate(date) // Set calendar to the selected date's month
    } else {
      setDisplayValue('')
      setCurrentDate(new Date()) // Reset to today's month if value is cleared
    }
  }, [value])

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target) && 
          inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDateSelect = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split('T')[0] // YYYY-MM-DD format
    onChange({ target: { value: formattedDate } })
    setIsOpen(false)
  }

  const handleInputClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="position-relative">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        ref={inputRef}
        type="text"
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        id={id}
        name={name}
        value={displayValue}
        onClick={handleInputClick}
        onChange={() => {}} // Prevent direct typing
        placeholder="בחר תאריך"
        required={required}
        readOnly
        style={{ cursor: 'pointer', direction: 'rtl', textAlign: 'right' }}
      />
      
      {isOpen && (
        <div 
          ref={calendarRef}
          className="position-absolute bg-white border rounded shadow-lg p-3 mt-1 z-3"
          style={{ 
            width: '280px', 
            right: '0',
            zIndex: 1050
          }}
        >
          {/* Calendar Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={goToPreviousMonth}>&lt;</button>
            <h6 className="mb-0">{calendar.monthYear}</h6>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={goToNextMonth}>&gt;</button>
          </div>
          
          {/* Days of week header */}
          <div className="row g-0 mb-2">
            {['ראש', 'שני', 'שלי', 'רבי', 'חמי', 'שיש', 'שבת'].map((day, index) => (
              <div key={index} className="col text-center">
                <small className="text-muted fw-bold">{day}</small>
              </div>
            ))}
          </div>
          
          {/* Calendar Grid */}
          <div className="row g-0">
            {calendar.days.map((dayObj, index) => (
              <div key={index} className="col p-0">
                <button
                  type="button"
                  className={`btn btn-sm w-100 ${
                    dayObj.isSelected 
                      ? 'btn-primary' 
                      : dayObj.isCurrentMonth 
                        ? dayObj.isToday 
                          ? 'btn-outline-primary' 
                          : 'btn-light' 
                        : 'btn-light text-muted'
                  }`}
                  onClick={() => handleDateSelect(dayObj.date)}
                  style={{ 
                    height: '32px', 
                    fontSize: '12px',
                    opacity: dayObj.isCurrentMonth ? 1 : 0.5
                  }}
                >
                  {dayObj.day}
                </button>
              </div>
            ))}
          </div>
          
          {/* Today button */}
          <div className="text-center mt-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => handleDateSelect(new Date())}
            >
              היום
            </button>
          </div>
        </div>
      )}
      
      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  )
}

export default DatePicker
