import React from 'react'

const ErrorModal = ({ state, onCloseClick }) => {
  if (!state.show) return null

  return (
    <>
      {/* Bootstrap Modal Backdrop */}
      <div className="modal-backdrop fade show" onClick={onCloseClick}></div>
      
      {/* Bootstrap Modal - Smaller size */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h6 className="modal-title mb-0 text-center w-100">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {state.header}
              </h6>
            </div>
            <div className="modal-body text-center py-4">
              <p className="mb-0" style={{ direction: 'rtl', fontSize: '16px' }}>
                {state.text}
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button 
                type="button" 
                className="btn btn-outline-secondary btn-sm" 
                onClick={onCloseClick}
              >
                סגור
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorModal
