import axios from "axios";



export async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // apply delay to fetching process
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return await response.data
  } catch (error) {
    console.error(error);
  }
}

export function fetchPosts2(){
  let data;
  let promise = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => setTimeout(() => data = response.data, 2000));
  return {
    read() {
      if (!data) {
        throw promise;
      }
      return data;
    },
  };
}