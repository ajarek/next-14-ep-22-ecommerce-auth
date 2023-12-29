'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { saveStorage } from '@/utils/localStorage'



const AddCart = ({id}:any) => {
  const router = useRouter()
  const addToCart= ()=>{
    const newProduct ={
      dataId:id,
    }
    saveStorage(newProduct,'Products')
    router.push('/shop')
  }
  return (
    <div  className='w-full flex '>
      <Button
        className='w-full bg-slate-900 text-white text-center py-2 rounded-md'
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default AddCart
