

function SinglePost({ post }) {
  return (
    <div className='bg-gray-600 text-gray-300 p-2 rounded-lg'>
      <h3 className='text-white font-bold text-lg'>post title:</h3>
      <h1>{post.title}</h1>
      <h3 className='text-white font-bold text-lg'>post text:</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default SinglePost