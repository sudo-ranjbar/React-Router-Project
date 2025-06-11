import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';

let initialProducts = [
  { id: 1, productName: 'گوشی' },
  { id: 2, productName: 'لپتاپ' },
  { id: 3, productName: 'مانیتور' },
  { id: 4, productName: 'صندلی' },
];

function Products() {

  const [products, setProducts] = useState(initialProducts)

  async function submitProduct(formData) {

    const inputProduct = formData.get('productName')

    if (inputProduct === '') return

    const newProduct = await createProduct(inputProduct)

    setProducts(prev => [...prev, newProduct])
  }

  return (
    <div className="container mx-auto">
      <h1 className='text-2xl text-gray-200 font-bold my-10'>Add Product</h1>
      <form className="bg-gray-200 p-2 m-2 w-[32rem] rounded mb-5 flex items-center gap-x-3" action={submitProduct}>
        <label>
          new product:
          <input type="text" name="productName" className="outline-0 border rounded m-2 px-2 py-2" />
        </label>
        <SubmitBtn />
      </form>
      <div className='bg-gray-200 p-2 m-2 w-[32rem] rounded mb-5 overflow-y-auto h-[60vh]'>
        <ul className='p-2 space-y-4 divide-y-1 divide-gray-500'>
          {
            products.map(product => (
              <li key={product.id} className='py-2 flex items-center justify-between'>
                <div>
                  <span className='mr-2 text-xs bg-blue-700 text-white p-2 rounded-lg'>ویرایش </span>
                  <span className='mr-2 text-xs bg-red-700 text-white p-2 rounded-lg cursor-pointer'>حذف </span>
                </div>
                <span className='font-bold text-lg'>{product.productName}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

function createProduct(productName) {
  return wait({ id: crypto.randomUUID(), productName }, 2000);
}

function wait(value, duration) {
  return new Promise(resolve => setTimeout(() => resolve(value), duration))
}

function SubmitBtn() {
  const data = useFormStatus();
  const isLoading = data.pending;

  return (
    <div>
      {
        isLoading ?
          <div className='loader'></div>
          :
          <button disabled={isLoading} className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"} py-2 rounded-md text-white px-7 bg-sky-800`}>
            اضافه کنید
          </button>
      }
    </div>
  )
}

export default Products
