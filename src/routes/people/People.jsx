import React, { Suspense } from 'react';
import { MyComponent } from './MyComponent';
import UserComponent from './Users';

function People() {
  return (
    <div>
      <h1 className='p-2 text-2xl text-white'>poeple:</h1>
      <div className='bg-gray-400 flex w-full divide-x divide-black mb-15'>
        <Suspense fallback={`Loding...`}>
          <MyComponent />
        </Suspense>
      </div>


      <h1 className='p-2 text-2xl text-white'>users:</h1>
      <div className='bg-gray-400 flex w-full divide-x divide-black'>
        <UserComponent />
      </div>
    </div>
  );
}

export default People;