'use client'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { CartContext } from '@/contexts/context'
import { Button } from './ui/button'

interface AddCartProps {
  id: string
  price: string
  name: string
  image: string
}
type NewProduct = {
  dataId: string
  price: string
  name: string
  image: string
}

const AddCart = ({ id, price, name, image }: AddCartProps) => {
  const router = useRouter()
  const { cart, setCart } = useContext(CartContext)

  const addToCart = () => {
    const newProduct: NewProduct = {
      dataId: id,
      price: price,
      name: name,
      image: image,
    }

    try {
      setCart([...cart, newProduct])
    } catch (error) {
      console.error('Error occurred while saving to localStorage:', error)
    } finally {
      router.push('/shop')
    }
  }

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
