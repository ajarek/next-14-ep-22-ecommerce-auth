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
    <div className='flex min-h-screen flex-col items-center justify-start p-8 max-md:p-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Image
          src={products.image}
          alt='product image'
          width={250}
          height={250}
          />
        </div>
        <div>
          <h1>{products.name}</h1>
          <div className='flex'>
          <p>{products.category}</p>
          <span>|</span>
          <p>{products.status}</p>
          </div>
          <p>{products.price}</p>
          <p>{products.description}</p>
          <Link href={''}>Add to cart</Link>
        </div>

      </div>
    </div>
  )
}

export default ProductsDetails