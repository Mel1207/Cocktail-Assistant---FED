import React from 'react'
import { useGlobalStore } from '../store/globalStore'
import { useCartStore } from '../store/cartStore'
import iconClose from '../assets/icon-close.svg'
import iconCheck from '../assets/icon-check.svg'
import iconEmpty from '../assets/icon-empty.svg'

const Modal = () => {
  // HOOKS CALL
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
            {cart.length === 0 ? (
              <div className='empty-cart'>
                <img src={iconEmpty} alt="empty cart" />
                <p>you cart is empty</p>
              </div>
              
            ) : (
              <>
                <h3>Hi Mel here’s your current cart</h3>
                <p>If all your items are correct please proceed to payments</p>

                <ul className='modal-cart-list'>
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img src={iconCheck} alt="checked icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            
          </div>
        </div>
       
        <div className="modal-footer">
          <button onClick={ closeModal } className='btn-secondary'>Close</button>
          {cart.length === 0 ? (
            <button className='btn btn-disabled'>Go to payments</button>
          ) : (
            <button onClick={ closeModal } className='btn btn-primary'>Go to payments</button>
          )}
        </div>
      </div> 
    </div>
  )
}

export default Modal