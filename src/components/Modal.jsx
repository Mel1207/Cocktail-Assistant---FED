import React from 'react'
import { useGlobalStore } from '../store/globalStore'
import { useCartStore } from '../store/cartStore'
import iconClose from '../assets/icon-close.svg'

const Modal = () => {
  const { closeModal } = useGlobalStore()
  const { cart } = useCartStore()

  return (
    <div className='modal-container'>
      <div className="modal">
        <div>
          <div className="modal-title">
            Cart list
            <button onClick={ closeModal }>
              <img src={iconClose} alt="close icon" />
            </button>
          </div>
          <div className="modal-body">
            <h3>Hi Mel here’s your current cart</h3>
            <p>If all your items are correct please proceed to payments</p>

            <ul>
              {cart.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
       
        <div className="modal-footer">
          <button onClick={ closeModal }>Close</button>
          <button onClick={ closeModal } className='btn btn-primary'>Go to payments</button>
        </div>
      </div> 
    </div>
  )
}

export default Modal