import React from 'react'
import { useCartStore } from '../store/cartStore'
import iconDelete from '../assets/icon-delete.svg'
import { useGlobalStore } from '../store/globalStore'

const SidebarRight = () => {
  // HOOKS CALL
  const { cart, removeFromCart } = useCartStore()
  const { openModal } = useGlobalStore()

  return (
    <div className='sidebar-right'>
      <div>
        <span>Shopping List</span>
        <div className="cart-item-list">
          {cart.map((item, index) => (
            <div key={index} className='cart-item'>
              <p>{item}</p>
              <button onClick={() => removeFromCart(index)}><img src={iconDelete} alt="delete" /></button>
            </div>
          ))}
        </div>
      </div>
      <button className='btn btn-primary' onClick={ openModal }>Print Shopping list</button>
    </div>
  )
}

export default SidebarRight