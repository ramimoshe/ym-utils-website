import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import HorizontalLine from '../components/HorizontalLine'
import NotificationModal from '../components/NotificationModal'
import DatePicker from '../components/DatePicker'

// Helper for empty required field state similar to your system
const EMPTY_REQUIRED_FIELD_STATE = { value: '', isValid: false, error: '' }

const StorageCalculator = () => {
  const [monthlyPriceState, setMonthlyPriceState] = useState('')
  const [startDateState, setStartDateState] = useState(EMPTY_REQUIRED_FIELD_STATE)
  const [endDateState, setEndDateState] = useState(EMPTY_REQUIRED_FIELD_STATE)
  const [calculationResult, setCalculationResult] = useState({ show: false, header: '', text: '' })

  useEffect(() => {
    // Any initialization logic can go here
  }, [])

  const calculate = (evt) => {
    if (!startDateState.value || !endDateState.value || !monthlyPriceState || monthlyPriceState === 0) {
      setCalculationResult({
        show: true,
        header: 'שגיאה',
        text: 'אנא מלא את כל השדות הנדרשים'
      })
      return
    }

    // Parse the start and end dates from the state
    const date1 = moment(startDateState.value, 'YYYY-MM-DD')
    const date2 = moment(endDateState.value, 'YYYY-MM-DD')

    if (!date1.isValid() || !date2.isValid()) {
      setCalculationResult({
        show: true,
        header: 'שגיאה',
        text: 'תאריכים לא תקינים'
      })
      return
    }

    if (date2.isBefore(date1)) {
      setCalculationResult({
        show: true,
        header: 'שגיאה',
        text: 'תאריך הסיום חייב להיות אחרי תאריך ההתחלה'
      })
      return
    }

    // Calculate the difference in months and days
    const months = date2.diff(date1, 'months')
    const remainingDays = date2.diff(date1.clone().add(months, 'months'), 'days')

    const monthlyPrice = Number(monthlyPriceState)
    const totalPrice2 = (months * monthlyPrice) + (remainingDays * monthlyPrice / 30)
    const totalPrice = Math.floor((months * monthlyPrice) + (remainingDays * monthlyPrice / 30))

    let message = 'יואב הובלות ואחסנה\n'
    message += 'עלות אחסנה\n\n'
    message += '--------------------------------------------\n'
    message += 'שיטת חישוב:\n'
    message += 'מחיר חודשי כפול מספר חודשי השכירות + \n'
    message += 'הימים הנותרים כפול מחיר יומי.\n\n'
    message += '* מחיר יומי = מחיר חודשי חלקי 30\n'
    message += '--------------------------------------------\n'
    message += 'כמות חודשים: ' + months + '\n'
    message += 'כמות ימים: ' + remainingDays + '\n'
    message += 'מחיר סופי: ' + totalPrice + ' שקל'

    // Set the calculation result to be shown with the calculated message
    setCalculationResult({
      show: true,
      header: 'פירוט עלויות',
      text: message
    })
  }

  const handlePostCalculate = () => {
    setCalculationResult({ show: false, header: '', text: '' })
  }

  const handleStartDateChange = (e) => {
    setStartDateState({
      value: e.target.value,
      isValid: e.target.value !== '',
      error: e.target.value === '' ? 'שדה חובה' : ''
    })
  }

  const handleEndDateChange = (e) => {
    setEndDateState({
      value: e.target.value,
      isValid: e.target.value !== '',
      error: e.target.value === '' ? 'שדה חובה' : ''
    })
  }

  return (
    <div className="container py-5">
      <NotificationModal state={calculationResult} onCloseClick={handlePostCalculate} />
      
      {/* Back to Home Button - Top */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-start">
          <Link to="/" className="btn btn-outline-secondary">
            חזור לעמוד הבית
          </Link>
        </div>
      </div>
      
      {/* Title and Description */}
      <div className="row gy-2 mt-3">
        <h4>מחשבון אחסנה</h4>
        <p>שיטת החישוב הינה מחיר חודשי כפול מספר חודשי השכירות + הימים הנותרים כפול מחיר יומי (מחיר יומי = מחיר חודשי חלקי 30)</p>
      </div>

      <HorizontalLine />

      {/* Form Fields */}
      <div className="row gy-2 mt-3">
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div>
            <label htmlFor="priceInput" className="form-label">מחיר חודשי</label>
            <input 
              type="number" 
              min="0" 
              max="3000" 
              className="form-control" 
              id="priceInput" 
              name="monthlyPrice"
              value={monthlyPriceState}
              onChange={e => {
                setMonthlyPriceState(e.target.value)
              }}
            />
          </div>
        </div>
        
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <DatePicker
            id="startDate"
            name="startDate"
            label="תאריך התחלה"
            value={startDateState.value}
            onChange={handleStartDateChange}
            error={startDateState.error}
            required
          />
        </div>
        
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <DatePicker
            id="endDate"
            name="endDate"
            label="תאריך סיום כולל"
            value={endDateState.value}
            onChange={handleEndDateChange}
            error={endDateState.error}
            required
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="row gy-2 mt-3">
        <div className="col-xxl-1 col-lg-2 col-md-3">
          <button 
            className="btn btn-primary" 
            onClick={(evt) => calculate(evt)}
          >
            חשב
          </button>
        </div>
      </div>
    </div>
  )
}

export default StorageCalculator
