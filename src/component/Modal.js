import React, { Component } from 'react'
import SlideContent from './SlideContent';


class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    const modalStyle = {
      backgroundColor: '#FCE205',
      borderRadius: 5,
      maxWidth: 600,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div className="backdrop" style={backdropStyle}>

        <div className="modal" style={modalStyle}>
          <div style={{float: 'right', display: 'inline'}}>
            <button onClick={this.props.onClose} >
              Close
          </button>
          </div>
          {this.props.children}
          <div style={{ backgroundColor: '#fff', minWidth: '100%', height: '200px', display: 'flex', overflowX: 'auto' }}>
            <SlideContent />
            <SlideContent />
            <SlideContent />
            <SlideContent />
            <SlideContent />
            <SlideContent />
            <SlideContent />
          </div>

        </div>
      </div>
    )
  }
}

export default Modal