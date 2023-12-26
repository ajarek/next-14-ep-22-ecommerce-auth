import Image from 'next/image'
import connect from '@/utils/db'
import ProductModel  from '@/models/Product'

const Shop = async () => {
  await connect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) 
  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-8 max-md:p-4">
     {products.map((product)=> (
        <p key={product._id}>{product.name}</p>
      ))}
    </div>
  )
}

export default Shop