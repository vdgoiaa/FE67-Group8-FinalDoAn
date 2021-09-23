import React from 'react'

const News = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_5050-868810_1024x1024@2x.jpg?v=1622506700")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              New
            </a>
            <div className="flex flex-col justify-start text-center ">
              <span className="text-3xl text-red-500 font-semibold leading-none tracking-wide">
                04
              </span>
              <span className="leading-none text-red-500 uppercase">Aug-2021</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              href="/#"
              className="font-medium text-md text-red-500 hover:text-red-700 hover:underline "
            >
              Suicide squad làm nên kì tích phòng trà
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://cdn1-www.comingsoon.net/assets/uploads/2019/02/slick-new-poster-for-alita-battle-angel1.jpeg")'
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              New
            </a>
            <div className="flex flex-col justify-start text-center ">
              <span className="text-3xl text-red-500 font-semibold leading-none tracking-wide">
                01
              </span>
              <span className="leading-none text-red-500 uppercase">Aug-2021</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              href="/#"
              className="font-medium text-red-500 hover:text-white text-md hover:underline "
            >
              Alita phim này mà ko còn thì phí cuộc đời
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://www.tiendauroi.com/wp-content/uploads/2018/09/e2faea36e1a92a0e844026aaa514cc3a9f28cd22.jpeg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              New
            </a>
            <div className="flex flex-col justify-start text-center ">
              <span className="text-3xl text-red-500 font-semibold leading-none tracking-wide">
                28
              </span>
              <span className="leading-none text-red-500 uppercase">Jul-2021</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              href="/#"
              className="font-medium text-md text-red-500 hover:text-red-700 hover:underline "
            >
              Phim hướng dẫn nuôi vợ ngta 
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://s.memehay.com/files/posts/20210412/tai-xe-grab-tokuda-cho-khach.jpeg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              New
            </a>
            <div className="flex flex-col justify-start text-center ">
              <span className="text-3xl text-red-500 font-semibold leading-none tracking-wide">
                19
              </span>
              <span className="leading-none text-red-500 uppercase">Jul-2021</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              href="/#"
              className="font-medium text-md text-red-500 hover:text-red-700 hover:underline "
            >
              Một bộ phim về anh Grab nghĩa hiệp và cô khách hàng may mắn
            </a>
          </h2>
        </div>
      </div>
    </div>
    )
}
export default News;