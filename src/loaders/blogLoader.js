
async function getPosts(api) {
  const data = await fetch(`${api}`);
  const posts = await data.json()
  return posts;
}

async function blogLoader() {
  const posts = await getPosts('https://jsonplaceholder.typicode.com/posts');
  return posts;
}


export default blogLoader