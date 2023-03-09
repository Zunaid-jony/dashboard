import React from 'react'
import { Link } from 'react-router-dom'

const ProductStyle = () => {
  return (
    <div>
        <div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>

        <Link to="/" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 mt-4">Product</Link>
      </div>

      
      <div>
        <div className="mt-10">
          {/* <!-- Decorative image grid --> */}
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://i.pinimg.com/236x/62/b7/34/62b73453d411b416141c1ebab5bf7c22--window-panels-window-coverings.jpg" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://i.pinimg.com/236x/62/b7/34/62b73453d411b416141c1ebab5bf7c22--window-panels-window-coverings.jpg" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGbV4VeemrkhzfP00UeJoxrFYKtX9y8OjpXSDojcclu1AqGkuaxxo7iZPwPVhXLAlXzo&usqp=CAU" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://www.pngitem.com/pimgs/m/512-5122310_vendor-management-car-park-car-parking-top-view.png" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGbV4VeemrkhzfP00UeJoxrFYKtX9y8OjpXSDojcclu1AqGkuaxxo7iZPwPVhXLAlXzo&usqp=CAU" alt="" className="h-full w-full object-cover object-center" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGbV4VeemrkhzfP00UeJoxrFYKtX9y8OjpXSDojcclu1AqGkuaxxo7iZPwPVhXLAlXzo&usqp=CAU" alt="" className="h-full w-full object-cover object-center" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGbV4VeemrkhzfP00UeJoxrFYKtX9y8OjpXSDojcclu1AqGkuaxxo7iZPwPVhXLAlXzo&usqp=CAU" alt="" className="h-full w-full object-cover object-center" alt="" className="h-full w-full object-cover object-center"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Link to="/" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</Link> */}
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default ProductStyle
