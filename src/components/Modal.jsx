import React from 'react'

const Modal = () => {
  return (
    <div className='modal-container'>
      <div className="modal">
        <div className="modal-title">Modal</div>
        <div className="modal-body">
          <h1>This is modal content list</h1>
        </div>
        <div className="modal-footer">
          <button>Close</button>
        </div>
      </div> 
    </div>
  )
}

export default Modal