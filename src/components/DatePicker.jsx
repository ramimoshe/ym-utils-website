import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import he from 'date-fns/locale/he'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('he', he)

const CustomDatePicker = ({ 
  id, 
  name, 
  label, 
  value, 
  onChange, 
  error, 
  required = false,
  className = "" 
}) => {
  
  const selectedDate = value ? new Date(value) : null

  const handleChange = (date) => {
    // The library returns a Date object. Format it as YYYY-MM-DD for the parent component.
    const formattedDate = date ? date.toISOString().split('T')[0] : ''
    // The parent component expects an event-like object
    onChange({ target: { name, value: formattedDate } })
  }

  return (
    <div className="date-picker-container">
      <label htmlFor={id} className="form-label">{label}</label>
      <DatePicker
        id={id}
        name={name}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        placeholderText="בחר תאריך"
        locale="he"
        required={required}
        autoComplete="off"
      />
      {error && (
        <div className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  )
}

export default CustomDatePicker
