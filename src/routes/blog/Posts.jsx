// import { use } from 'react';
import SinglePost from './SinglePost';

import { fetchPosts2 } from "./modules/fetchData"

const postsData = fetchPosts2()


function Posts() {
  
  // const posts = use(postData);

  const posts = postsData.read()
  
  return (
    <div className='p-2 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>

      {
        posts.map(post => (
          <SinglePost key={post.id} post={post} />
        ))
      }

    </div>
  );

}



export default Posts;