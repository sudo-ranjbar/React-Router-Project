import React, { useActionState } from 'react'
import { action1, action2 } from '../../actions/actionTest'

function About() {
  const initialFormState = {
    usernameErrorMessage: '',
    usernameErrorBorder: false,
    emailErrorMessage: '',
    emailErrorBorder: false,
    streetErrorMessage: '',
    streetErrorBorder: false,
  }

  const [state1, formAction1] = useActionState(action1, 0);
  const [state2, formAction2, isPending] = useActionState(action2, initialFormState);

  return (
    <div className="container mx-auto">
      <h1 className='text-2xl text-gray-200 font-bold my-10'>Product Page</h1>
      <p className='text-lg text-gray-200 font-bold my-10'>the idea of applying useActionState is that we can implement that on server side; however, we could not using onSubmit on server side!</p>

      {/* Uncontrolled field */}
      <h2 className="text-lg text-gray-200 font-bold">useActionState without formData</h2>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" action={formAction1}>
        <label>
          number: {state1}
          <input type="text" name="email" className="ring-1 rounded m-2 px-2" />
        </label>
        <button className="bg-sky-400 p-2 rounded-md text-white focus:bg-blue-800">submit</button>
      </form>


      {/* formData and formAction */}
      <h2 className="text-lg text-gray-200 font-bold">useActionState with formData</h2>
      <div className={`${state2?.status === 'error' ? "text-3xl text-red-600" : "text-3xl text-emerald-600"}`}>{state2?.message}</div>
      <form className="bg-gray-200 p-2 m-2 w-fit rounded mb-15" action={formAction2}>
        <label>
          username:
          <input type="text" name="username" defaultValue={state2.inputs?.username} className={`outline-0 border rounded m-2 px-2 ${state2?.usernameErrorBorder && "border-red-500"}`} />
          <div className='text-red-600'>{state2?.usernameErrorMessage}</div>
        </label>
        <label>
          email:
          <input type="text" name="email" defaultValue={state2.inputs?.email} className={`outline-0 border rounded m-2 px-2 ${state2?.emailErrorBorder && "border-red-500"}`} />
          <div className='text-red-600'>{state2?.emailErrorMessage}</div>
        </label>
        <label>
          street:
          <input type="text" name="streetAddress" defaultValue={state2.inputs?.streetAddress} className={`outline-0 border rounded m-2 px-2 ${state2?.streetErrorBorder && "border-red-500"}`} />
          <div className='text-red-600'>{state2?.streetErrorMessage}</div>
        </label>
        <button type='submit' className={`bg-sky-400 p-2 rounded-md text-white`}>
          {
            isPending ? 'Submitting...' : 'Submit'
          }
        </button>
      </form>

    </div>
  )
}

export default About
