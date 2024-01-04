'use client'

import React, { useContext } from 'react'
import { CartContext } from '@/contexts/context'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  return (
    <div className='flex min-h-full flex-col  p-8 max-md:p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='grid grid-cols-2 gap-4  place-items-center mt-16'>
        { cart.map((item:any) => (
          <div key={item.dataId} className='flex flex-col justify-evenly  p-4'>
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            </div>
        )
        )}
        </div>
              

    </div>
  )
}

export default Cart
