import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import connect from '@/utils/db'
import ProductModel  from '@/models/Product'

import Link from 'next/link'

const ProductsTable = async () => {
  await connect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) 

  return (
    <Table>
      <TableCaption>List of products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=' font-bold'>Image</TableHead>
          <TableHead className='font-bold '>Name</TableHead>
          <TableHead className='font-bold '>Price</TableHead>
          <TableHead className='text-center font-bold'>Categories</TableHead>
          <TableHead className='text-center font-bold'>Status</TableHead>
          <TableHead className='text-center font-bold'>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length === 0 ? (
          <TableCell colSpan={5}>No product found</TableCell>
        ) : (
          products.map((product) => (
            <TableRow className='
            ' key={product._id}>
              <TableCell className='font-medium'>
                <Image
                  src={product.image}
                  alt='shirt'
                  width={60}
                  height={73}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price} $</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>{product.description}</TableCell>
              
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default ProductsTable