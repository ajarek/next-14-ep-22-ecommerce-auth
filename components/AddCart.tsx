'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { saveStorage } from '@/utils/localStorage'

interface AddCartProps {
  id: string;
}

const AddCart = ({id}:AddCartProps) => {
  const router = useRouter()
  type NewProduct = {
    dataId: string;
  }

  const addToCart = () => {
    
    try {
      const newProduct: NewProduct = {
        dataId: id,
      }
      saveStorage(newProduct, 'Products')
      router.push('/shop')
    } catch (error) {
      console.error('Error occurred while saving to localStorage:', error)
    }
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
