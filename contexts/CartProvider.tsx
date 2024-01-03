'use client'
import React, { useState } from 'react'
import { CartContext } from '@/contexts/context'
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <>{children}</>
    </CartContext.Provider>
  )
}

export default CartProvider
