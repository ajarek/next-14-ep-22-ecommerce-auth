import Image from 'next/image'
import connect from '@/utils/db'
import ProductModel  from '@/models/Product'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Shop = async () => {
  await connect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) 
  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-8 max-md:p-4">
     <ul className='grid grid-cols-3 max-md:grid-cols-1 gap-6'>
        {products.map((item) => (
          <li key={item._id}>
            <Link
              href={`/shop/${item.category}`}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              <Card className='min-h-[350px] flex flex-col justify-between p-4 '>
                <CardHeader>
                  <CardTitle className='flex justify-center'>
                    <Image
                      src={item.image}
                      alt='icon categories'
                      width={150}
                      height={150}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center'>{item.name}</p>
                  <p className='text-center'>{(+item.price). toFixed(2) } $</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shop