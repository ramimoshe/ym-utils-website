import React from 'react'
import Logo from './Logo'

const NotificationModal = ({ state, onCloseClick }) => {
  if (!state.show) return null

  const handleWhatsAppShare = () => {
    // Create clean text message for WhatsApp (no HTML tags)
    let message = `יואב הובלות ואחסנה\nחשבונית לתשלום\n\n`
    
    // Add customer info
    if (state.customerName) {
      message += `👤 לקוח: ${state.customerName}\n`
    }
    
    // Add service period
    if (state.entryDate && state.exitDate) {
      const entryDateFormatted = new Date(state.entryDate).toLocaleDateString('he-IL')
      const exitDateFormatted = new Date(state.exitDate).toLocaleDateString('he-IL')
      message += `📅 תקופת השירות: ${entryDateFormatted} - ${exitDateFormatted}\n\n`
    }
    
    // Add calculation method (clean text version)
    if (state.methodText) {
      const cleanMethodText = state.methodText
        .replace(/<strong>/g, '')
        .replace(/<\/strong>/g, '')
        .replace(/<br \/>/g, '\n')
      message += `${cleanMethodText}\n\n`
    }
    
    // Add summary (clean text version)
    if (state.summaryText) {
      const cleanSummaryText = state.summaryText
        .replace(/<strong>/g, '')
        .replace(/<\/strong>/g, '')
        .replace(/<br \/>/g, '\n')
      message += `${cleanSummaryText}\n\n`
    }
    
    // Add total amount
    if (state.totalAmount) {
      message += `💰 סכום לתשלום: ${state.totalAmount.toLocaleString('he-IL')} ₪\n\n`
    }
    
    // Add contact info
    message += `פרטי התקשרות:\n📞 052-3572480\n📧 yoav.moving@gmail.com`
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePrintQuote = () => {
    const printWindow = window.open('', '_blank')
    const currentDate = new Date().toLocaleDateString('he-IL')
    const logoUrl = import.meta.env.DEV ? "/LOGO_G2.png" : "/ym-utils-website/LOGO_G2.png"
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>הצעת מחיר - שירותי אחסנה</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            direction: rtl;
            background: white;
            color: #333;
            line-height: 1.4;
            padding: 30px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #007bff;
            padding-bottom: 15px;
          }
          
          .logo {
            max-width: 220px;
            height: auto;
            margin-bottom: 5px;
          }
          
          .company-info {
            color: #666;
            font-size: 14px;
            margin-top: 0px;
          }
          
          .document-title {
            font-size: 22px;
            font-weight: bold;
            color: #007bff;
            margin: 20px 0 15px 0;
            text-align: center;
          }
          
          .quote-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            border-right: 3px solid #007bff;
          }
          
          .calculation-details {
            background: white;
            padding: 15px;
            border: 1px solid #dee2e6;
            border-radius: 6px;
            margin: 15px 0;
          }
          
          .calculation-details pre {
            white-space: pre-wrap;
            font-family: inherit;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
          }
          
          .footer {
            margin-top: 50px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #dee2e6;
            color: #666;
            font-size: 12px;
          }
          
          .contact-info {
            margin: 10px 0;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 4px;
            text-align: center;
          }
          
          .contact-info h5 {
            color: #007bff;
            margin-bottom: 8px;
          }
          
          @media print {
            body {
              padding: 15px;
              color: #000 !important;
            }
            .no-print {
              display: none;
            }
            .header {
              margin-bottom: 15px;
              padding-bottom: 10px;
              border-bottom: 3px solid #000 !important;
            }
            .document-title {
              margin: 15px 0 10px 0;
              color: #000 !important;
              font-weight: bold !important;
            }
            .quote-info, .service-details, .calculation-details, .customer-info {
              margin: 15px 0;
              padding: 0;
              background: #fff !important;
            }
            .contact-info {
              margin: 15px 0;
              padding: 0;
              background: #fff !important;
            }
            /* Make all headers bold and black */
            h1, h2, h3, h4, h5, h6 {
              color: #000 !important;
              font-weight: bold !important;
            }
            /* Ensure strong text is truly bold */
            strong {
              font-weight: 900 !important;
              color: #000 !important;
            }
            /* Clean sections without borders */
            .service-details, .calculation-method div, .calculation-summary div {
              background: #fff !important;
              border: none !important;
            }
            /* Force right alignment for calculation sections */
            .calculation-sections {
              text-align: right !important;
              direction: rtl !important;
            }
            .calculation-sections * {
              text-align: right !important;
              direction: rtl !important;
            }
            .calculation-method, .calculation-summary {
              text-align: right !important;
              direction: rtl !important;
              width: 100% !important;
            }
            .calculation-method div, .calculation-summary div {
              text-align: right !important;
              direction: rtl !important;
              width: 100% !important;
            }
            .calculation-method strong, .calculation-summary strong {
              text-align: right !important;
              direction: rtl !important;
              display: inline !important;
            }
            div[style*="white-space: pre-wrap"] {
              text-align: right !important;
              direction: rtl !important;
            }
          }
          
          .highlight {
            background: linear-gradient(120deg, #007bff15 0%, #007bff15 100%);
            padding: 2px 4px;
            border-radius: 3px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoUrl}" alt="יואב הובלות ואחסנה" class="logo">
          <div class="company-info">
            מתמחים בשירותי הובלות ואחסנה מקצועיים
          </div>
        </div>
        
        <div class="document-title">חשבונית - שירותי אחסנה</div>
        
        <div class="invoice-info" style="text-align: right; direction: rtl; margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
          <p style="margin: 0 0 10px 0; text-align: right;"><strong>📅 תאריך חשבונית:</strong> ${currentDate}</p>
          ${state.customerName ? 
          '<p style="margin: 0; text-align: right;"><strong>👤 לקוח:</strong> ' + state.customerName + '</p>' : ''}
        </div>
        
        ${state.entryDate && state.exitDate && state.monthlyPrice && state.methodText && state.summaryText ? `
        <div class="calculation-info" style="text-align: right; direction: rtl; margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
          <!-- Service Period -->
          <div style="margin-bottom: 20px;">
            <strong>📅 תקופת השירות:</strong><br />
            ${new Date(state.entryDate).toLocaleDateString('he-IL')} - ${new Date(state.exitDate).toLocaleDateString('he-IL')}
          </div>
          
          <!-- Calculation Sections Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: right; direction: rtl;">
            <!-- Method Section -->
            <div style="text-align: right; direction: rtl;">
              ${state.methodText.replace(/\n/g, '<br />')}
            </div>
            <!-- Summary Section -->
            <div style="text-align: right; direction: rtl;">
              ${state.summaryText.replace(/\n/g, '<br />')}
            </div>
          </div>
        </div>` : ''}
        
        ${state.totalAmount ? `
        <div class="amount-due" style="text-align: center; margin: 40px 0; padding: 25px; background: #f8f9fa;">
          <h1 style="color: #000; font-weight: 900; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">
            סכום לתשלום: ${state.totalAmount.toLocaleString('he-IL')} ₪
          </h1>
        </div>` : ''}
        
        <div class="contact-info" style="margin: 30px 0 0 0; padding: 0; text-align: center;">
          <h5 style="color: #000; margin-bottom: 10px; font-weight: bold; text-decoration: underline;">פרטי התקשרות</h5>
          <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; font-size: 13px; line-height: 1.6; font-weight: 600;">
            <span style="color: #000;">📞 052-3572480</span>
            <span style="color: #000;">📧 yoav.moving@gmail.com</span>
          </div>
          <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; font-size: 12px; margin-top: 6px; font-weight: 500;">
            <span style="color: #000;">🌐 yoav-moving.co.il</span>
            <span style="color: #000;">📘 facebook.com/yoav.moving</span>
          </div>
        </div>
        
        <div class="footer">
          <p>אנא בצעו תשלום בהתאם לפירוט לעיל</p>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `)
    
    printWindow.document.close()
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
              {/* Company Logo */}
              <div className="text-center mb-3">
                <Logo size="modal" className="" />
              </div>
              
              {/* Invoice Date and Customer Info */}
              <div className="bg-light p-3 rounded mb-4" style={{ direction: 'rtl' }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <strong>📅 תאריך חשבונית:</strong><br />
                    <span className="text-muted">{new Date().toLocaleDateString('he-IL')}</span>
                  </div>
                  {state.customerName && (
                    <div className="col-md-6">
                      <strong>👤 לקוח:</strong><br />
                      <span className="text-dark fw-bold">{state.customerName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Service Details */}
              {state.entryDate && state.exitDate && (
                <div className="row mb-4" style={{ direction: 'rtl' }}>
                  <div className="col-12">
                    <div className="bg-info bg-opacity-10 p-3 rounded border-end border-info border-4 text-end">
                      <h6 className="text-dark fw-bold mb-3">📅 תקופת השירות:</h6>
                      <div>
                        <span className="text-muted">
                          {new Date(state.entryDate).toLocaleDateString('he-IL')} - {new Date(state.exitDate).toLocaleDateString('he-IL')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-end" style={{ direction: 'rtl' }}>
                {/* Method Section */}
                {state.methodText && (
                  <div 
                    className="bg-info bg-opacity-10 p-3 rounded border mb-3" 
                    style={{ 
                      whiteSpace: 'pre-wrap', 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#2c3e50',
                      borderRight: '4px solid #17a2b8'
                    }}
                    dangerouslySetInnerHTML={{ __html: state.methodText }}
                  />
                )}
                
                {/* Summary Section */}
                {state.summaryText && (
                  <div 
                    className="bg-success bg-opacity-10 p-3 rounded border" 
                    style={{ 
                      whiteSpace: 'pre-wrap', 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#2c3e50',
                      borderRight: '4px solid #28a745'
                    }}
                    dangerouslySetInnerHTML={{ __html: state.summaryText }}
                  />
                )}
              </div>
              
              {/* Prominent Amount Due Section - Moved to Bottom */}
              {state.totalAmount && (
                <div className="text-center mb-4" style={{ direction: 'rtl' }}>
                  <div className="rounded p-4 bg-success bg-opacity-10">
                    <h3 className="text-success fw-bold mb-0">
                      סכום לתשלום: {state.totalAmount.toLocaleString('he-IL')} ₪
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary me-2" 
                onClick={handlePrintQuote}
              >
                הדפס חשבונית
              </button>
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
