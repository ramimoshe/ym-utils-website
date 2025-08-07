import React from 'react'

const NotificationModal = ({ state, onCloseClick }) => {
  if (!state.show) return null

  const handleWhatsAppShare = () => {
    // Use the text as-is since it already includes company branding
    const message = state.text
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Bootstrap Modal Backdrop */}
      <div className="modal-backdrop fade show" onClick={onCloseClick}></div>
      
      {/* Bootstrap Modal */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title mb-0 text-center w-100">{state.header}</h5>
            </div>
            <div className="modal-body">
              <div className="text-end" style={{ direction: 'rtl' }}>
                <pre className="bg-light p-3 rounded" style={{ 
                  whiteSpace: 'pre-wrap', 
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {state.text}
                </pre>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-success me-2" 
                onClick={handleWhatsAppShare}
              >
                שלח בווטסאפ
              </button>
              <button 
                type="button" 
                className="btn btn-secondary" 
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

export default NotificationModal
