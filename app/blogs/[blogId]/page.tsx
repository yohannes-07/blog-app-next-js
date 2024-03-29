import getCurrentUser from "@/app/actions/getCurrentUser"
import getBlogsById from '../../actions/getBlogsById'
import BlogId from '../../../components/BlogId'


interface IParams {
    blogId:string,
}


export default async function page({params}:{params:IParams}) {

  const blog  = await getBlogsById(params)
  return (


    <div>
        <div>
          <BlogId
            name={blog?.name}
            description={blog?.description}
            blogId={blog?.id}
            imageSrc={blog?.imageSrc}
          />
        </div>
    </div>
  )
}