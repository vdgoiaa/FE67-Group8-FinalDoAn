import React from 'react'

const Review = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/e1/c5/5d/e1c55d2d0b594cb79a7a6e6883ce6a3c.jpg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Review
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
              Review Wolverine nguồn gốc người lai sói
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/33/22/49/33224962e6919a168ef2efbf743a1b6d.png")'
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Review
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
              Review về 1 cô gái đáng thương phải bay nhảy để đi lính
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/9c/42/e1/9c42e121b4be97f74242b59a3a87b9c9.jpg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Review
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
              Review về ca sĩ Jack hát bài lạc trôi
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://sd.keepcalms.com/i-w600/keep-calm-and-use-brazzers.jpg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Review
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
              Review về studio sản xuất phim nổi tiếng
            </a>
          </h2>
        </div>
      </div>
    </div>
    )
}
export default Review;