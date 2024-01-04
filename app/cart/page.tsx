'use client'

import React, { useContext } from 'react'
import { CartContext } from '@/contexts/context'
import Image from 'next/image'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const deleteItem = (id:string) => {
    const newCart = [...cart].filter((item:any) => item.dataId!== id)
    setCart(newCart)
  }
   
  const payment = cart.reduce((acc:any,item:any)=>acc+item.price*1,0)
  
  return (
    <div className='flex min-h-full flex-col  py-8 px-24 max-md:p-4'>
      <h1 className='text-2xl font-bold text-center'>Cart</h1>
      <div className='flex flex-col gap-4  '>
        { cart.map((item:any) => (
          <div key={item.dataId} className='grid grid-cols-5 place-items-center  '>
             <Image
                      src={item.image}
                      alt='icon categories'
                      width={50}
                      height={50}
                    />
            <p className='w-[250px] text-xl max-lg:w-[100px] '>{item.name}</p>
            <p className='text-xl '>1</p>
            <p className='text-xl w-[150px] max-lg:w-[80px] text-right '>{(+item.price).toFixed(2)} $</p>
            <button onClick={()=>deleteItem(item.dataId)} className='text-3xl text-red-700'> 🗑 </button>
            </div>
        )
        )}
        </div>
        <div className='w-full text-xl flex justify-end mt-4'>To pay: <span className='text-2xl font-bold ml-2'>{(+payment).toFixed(2)} $</span> </div>      

    </div>
  )
}

export default Cart
