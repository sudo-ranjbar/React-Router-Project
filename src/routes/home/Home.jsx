import { useRef, useState } from "react";

function Home() {

  const inputRef = useRef(null);

  const [username, setUsername] = useState("");

  const formAction = (formData) => {
    const formValues = Object.fromEntries(formData);
    const { username, email } = formValues;
    console.log(username + ' ' + email);

  }


  return (
    <div className="container mx-auto">
      <h1 className='text-2xl text-gray-200 font-bold my-10'>Home Page</h1>

      {/* Uncontrolled field */}
      <h2 className="text-lg text-gray-200 font-bold">Uncontrolled field:</h2>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" onSubmit={(e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
      }}>
        <label>
          username:
          <input ref={inputRef} type="text" name="username" className="ring-1 rounded m-2 px-2" />
        </label>
        <button className="bg-sky-400 p-2 rounded-md text-white">submit</button>
      </form>

      {/* Controlled field */}
      <h2 className="text-lg text-gray-200 font-bold">Controlled field:</h2>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" onSubmit={(e) => {
        e.preventDefault();
        console.log(username)
      }}>
        <label>
          username:
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" className="ring-1 rounded m-2 px-2" />
        </label>
        <button className="bg-sky-400 p-2 rounded-md text-white">submit</button>
      </form>

      {/* FormData object */}
      <h2 className="text-lg text-gray-200 font-bold">FormData object (best way!):</h2>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        console.log(username)

        //unpacking the data from formData object
        const formValues = Object.fromEntries(formData);
        console.log(formValues)
        console.log(formValues.email)

      }}>
        <label>
          username:
          <input type="text" name="username" className="ring-1 rounded m-2 px-2" />
        </label>
        <label>
          email:
          <input type="text" name="email" className="ring-1 rounded m-2 px-2" />
        </label>
        <button className="bg-sky-400 p-2 rounded-md text-white">submit</button>
      </form>

      <hr />
      <h2 className="text-4xl text-gray-200">using <strong>action</strong> and <strong>formAction</strong></h2>
      <br className="mb-15" />

      {/* formData and formAction */}
      <h2 className="text-lg text-gray-200 font-bold">formData and formAction:</h2>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" action={formAction}>
        <label>
          username:
          <input type="text" name="username" className="ring-1 rounded m-2 px-2" />
        </label>
        <label>
          email:
          <input type="text" name="email" className="ring-1 rounded m-2 px-2" />
        </label>
        <button className="bg-sky-400 p-2 rounded-md text-white focus:bg-blue-800">submit</button>
      </form>
    </div>
  )
}

export default Home;