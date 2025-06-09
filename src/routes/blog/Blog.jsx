import React from 'react'

import { useLoaderData } from 'react-router'

function Blog() {

  const posts = useLoaderData();


  return (
    <div className='p-5'>
      <div className='border p-2 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>


        {
          posts.map(post => (
            <div key={post.id} className='bg-gray-600 text-gray-300 p-2 rounded-lg'>
              <h3 className='text-white font-bold text-lg'>post title:</h3>
              <h1>{post.title}</h1>
              <h3 className='text-white font-bold text-lg'>post text:</h3>
              <p>{post.body}</p>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Blog
