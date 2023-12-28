import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import connect from '@/utils/db'
import ProductModel  from '@/models/Product'

const ProductsDetails = async ({ params }: { params: { id: string } }) => {
const { id } = params


  await connect()
  const products = await ProductModel.findById({_id:id})
  return (
    <div className='flex min-h-full flex-col  p-8 max-md:p-4'>
      <div className='grid grid-cols-2 gap-4  place-items-center mt-16'>
        <div className=''>
          <Image
          src={products.image}
          alt='product image'
          width={300}
          height={300}
          />
        </div>
        <div className='h-full min-h-[400px] flex flex-col justify-evenly  p-4'>
          <h1 className='text-2xl font-bold'>{products.name}</h1>
          <div className='flex'>
          <p>{products.category}</p>
          <span className='px-2'>|</span>
          <p>{products.status}</p>
          </div>
          <p className='text-xl'>{(+products.price).toFixed(2) } $</p>
          <div className='flex flex-col'>
           <h2 className='font-bold'>Description</h2>
          <p>{products.description}</p>
          </div>
          <Link className='w-full bg-slate-900 text-white text-center py-2 rounded-md' href={'/cart'}>Add to cart</Link>
        </div>

      </div>
    </div>
  )
}

export default ProductsDetails