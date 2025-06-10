
async function getPosts(api) {
  const data = await fetch(`${api}`);
  const posts = await data.json()
  return posts;
}

async function blogLoader() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const posts = await getPosts('https://jsonplaceholder.typicode.com/posts');
  return posts;
}


export default blogLoader