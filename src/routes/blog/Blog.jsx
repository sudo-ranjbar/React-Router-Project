import { Suspense } from "react"
// import { fetchPosts } from "./modules/fetchData"

import Posts from './Posts';
import LoadingSkeleton from './LoadingSkeleton';

function Blog() {

  // const posts = fetchPosts()

  return (
    <div className='p-5'>
      <h1 className='text-2xl text-gray-200 font-bold my-10'>Blog Page</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <Posts />
      </Suspense>
    </div>
  )
}



export default Blog
