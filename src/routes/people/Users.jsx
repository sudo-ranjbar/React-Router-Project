import { Suspense } from "react";

const fetchData = () => {
  let data;
  let promise = fetch("https://dummyjson.com/users/1")
    .then((response) => response.json())
    .then((json) => (data = json));
  return {
    read() {
      if (!data) {
        throw promise;
      }
      return data;
    },
  };
};

const userData = fetchData();

const UserComponent = () => (
  <Suspense fallback={<p>Fetching user details...</p>}>
    <UserWelcome />
  </Suspense>
);

const UserWelcome = () => {
  const userDetails = userData.read();
  return (
    <div className="app">
      <div>
        <h4> <span className="font-bold">Welcome, </span>{userDetails.firstName}</h4>
        <p> <span className="font-bold">Email: </span>{userDetails.email}</p>
      </div>
    </div>
  );
};
export default UserComponent;