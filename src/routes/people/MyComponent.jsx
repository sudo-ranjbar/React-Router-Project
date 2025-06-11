import { wrapPromise } from "./modules/promiseWrapper"


const getPeople = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(["bob", "rick", "tina"])
    }, 1000)
  })
}

const peoplePromise = wrapPromise(getPeople())

export const MyComponent = () => {
  // throw Promise.resolve("test")

  const people = peoplePromise.read()

  return (
    <>
      {people.map(person => (
        <div key={person} className="bg-amber-50 p-2">{person}</div>
      ))}
    </>
  )
}


