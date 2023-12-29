import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import connect from '@/utils/db'
import ProductModel  from '@/models/Product'
import AddCart from '@/components/AddCart'

const ProductsDetails = async ({ params }: { params: { id: string } }) => {
const { id } = params


  await connect()
  const product = await ProductModel.findById({_id:id})
  return (
    <div className='flex min-h-full flex-col  p-8 max-md:p-4'>
      <div className='grid grid-cols-2 gap-4  place-items-center mt-16'>
        <div className=''>
          <Image
          src={product.image}
          alt='product image'
          width={300}
          height={300}
          />
        </div>
        <div className='h-full min-h-[400px] flex flex-col justify-evenly  p-4'>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <div className='flex'>
          <p>{product.category}</p>
          <span className='px-2'>|</span>
          <p>{product.status}</p>
          </div>
          <p className='text-xl'>{(+product.price).toFixed(2) } $</p>
          <div className='flex flex-col'>
           <h2 className='font-bold'>Description</h2>
          <p>{product.description}</p>
          </div>
          <AddCart id={id}/>
        </div>

      </div>
    </div>
  )
}

export default ProductsDetails