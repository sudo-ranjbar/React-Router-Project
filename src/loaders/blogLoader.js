
async function blogLoader() {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // apply delay to fetching process

  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = data.json()

  return posts;
}


export default blogLoader