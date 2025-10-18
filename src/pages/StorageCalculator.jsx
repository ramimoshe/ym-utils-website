import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import HorizontalLine from '../components/HorizontalLine'
import NotificationModal from '../components/NotificationModal'
import ErrorModal from '../components/ErrorModal'
import CustomDatePicker from '../components/DatePicker'

// Helper for empty required field state similar to your system
const EMPTY_REQUIRED_FIELD_STATE = { value: '', isValid: false, error: '' }

const StorageCalculator = () => {
  const [customerNameState, setCustomerNameState] = useState('')
  const [monthlyPriceState, setMonthlyPriceState] = useState('')
  const [startDateState, setStartDateState] = useState(EMPTY_REQUIRED_FIELD_STATE)
  const [endDateState, setEndDateState] = useState(EMPTY_REQUIRED_FIELD_STATE)
  const [calculationResult, setCalculationResult] = useState({ 
    show: false, 
    header: '', 
    methodText: '',
    summaryText: '',
    customerName: '',
    entryDate: '', 
    exitDate: '', 
    monthlyPrice: '',
    totalAmount: 0
  })
  const [errorState, setErrorState] = useState({ show: false, header: '', text: '' })


  const calculate = (evt) => {
    if (!customerNameState.trim() || !startDateState.value || !endDateState.value || !monthlyPriceState || monthlyPriceState === 0) {
      setErrorState({
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
      setErrorState({
        show: true,
        header: 'שגיאה',
        text: 'תאריכים לא תקינים'
      })
      return
    }

    if (date2.isBefore(date1)) {
      setErrorState({
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
    const totalPrice = Math.floor((months * monthlyPrice) + (remainingDays * monthlyPrice / 30))

    // Split into two sections
    const methodMessage = '<strong>📊 שיטת חישוב:</strong>'
      + '\n• מחיר חודשי × מספר חודשי השכירות'
      + '\n• ימים נותרים × מחיר יומי'
      + '\n• סה"כ = חודשים + ימים'
    
    const summaryMessage = '<strong>💰 סיכום עלויות:</strong>'
      + '\n📝  מחיר חודשי: ' + monthlyPrice + ' ₪'
      + '\n🗓️  כמות חודשים: ' + months + ' חודש' + (months !== 1 ? 'ים' : '')
      + '\n📅  כמות ימים: ' + remainingDays + ' ימים'
    
    // Set the calculation result to be shown with the calculated message
    setCalculationResult({
      show: true,
      header: 'חשבונית לתשלום',
      methodText: methodMessage,
      summaryText: summaryMessage,
      customerName: customerNameState.trim(),
      entryDate: startDateState.value,
      exitDate: endDateState.value,
      monthlyPrice: monthlyPriceState,
      totalAmount: totalPrice
    })
  }

  const handlePostCalculate = () => {
    setCalculationResult({ 
      show: false, 
      header: '', 
      methodText: '',
      summaryText: '',
      customerName: '',
      entryDate: '', 
      exitDate: '', 
      monthlyPrice: '',
      totalAmount: 0
    })
  }

  const handleErrorClose = () => {
    setErrorState({ show: false, header: '', text: '' })
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
      <ErrorModal state={errorState} onCloseClick={handleErrorClose} />
      
      {/* Back to Home Button - Top */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-start">
          <Link to="/" className="btn btn-outline-secondary">
            חזור לעמוד הבית
          </Link>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          {/* Title and Description */}
          <div className="row gy-2">
            <h4>חשבונית שירותי אחסנה</h4>
          </div>

          <HorizontalLine />

          {/* Form Fields */}
          <div className="row gy-3 mt-1">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div>
                <label htmlFor="customerNameInput" className="form-label">שם הלקוח</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="customerNameInput" 
                  name="customerName"
                  value={customerNameState}
                  placeholder="הכנס שם הלקוח"
                  onChange={e => {
                    setCustomerNameState(e.target.value)
                  }}
                />
              </div>
            </div>
            
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
              <CustomDatePicker
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
              <CustomDatePicker
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
          <div className="row gy-2 mt-4">
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
      </div>
    </div>
  )
}

export default StorageCalculator
