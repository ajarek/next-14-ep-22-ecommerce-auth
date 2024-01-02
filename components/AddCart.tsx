'use client'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { Button } from './ui/button'
import { saveStorage } from '@/utils/localStorage'

interface AddCartProps {
  id: string
}
type NewProduct = {
  dataId: string
}
const STORAGE_KEY = 'Products'
const AddCart = ({ id }: AddCartProps) => {
  const router = useRouter()

  const addToCart = useCallback(() => {
    const newProduct: NewProduct = {
      dataId: id,
    }

    try {
      if (typeof localStorage !== 'undefined') {
        saveStorage(newProduct, STORAGE_KEY)
      } else {
        throw new Error('localStorage is not available')
      }
      router.push('/shop')
    } catch (error) {
      console.error('Error occurred while saving to localStorage:', error)
    }
  }, [id, router])

  return (
    <div className='w-full flex'>
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
