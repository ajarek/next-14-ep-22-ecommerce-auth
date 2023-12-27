import connect from '@/utils/db'
import ProductModel  from '@/models/Product'



const page = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  await connect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) 
  const array=products.filter(el=>el.category===category)
  return (
    <div>
      {array.map(item=>{
        return(
          <div key={item._id}>{item.name}</div>
        )
      })}
    </div>
  )
}

export default page
