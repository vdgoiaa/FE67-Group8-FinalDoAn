import React from "react";

const Event = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://storage.googleapis.com/stc.zcdn.link/hdf/5/96/1738227836594695026/poster-org-1619453214404-mortal.kombat.2021-poster.jpg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Event
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
              Mortal Kombat ấn định ngày ra mắt
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2021/cadwpqrnd/2021_02_23/godzillavskong07_csjg.jpg")'
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Event
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
              Kong vs Godzilla
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.redd.it/yedsff8571xx.png")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Event
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
              Darius gọi Garen là thằng đbrr
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/c3/6d/30/c36d3095740cb2d95e7dc3ebad195d25.jpg")',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900 dark:to-coolGray-900" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              href="/#"
              className="px-3 py-2 text-lg text-red-500 hover:text-red-700 font-semibold tracking-wider uppercase"
            >
              Event
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
              Một bộ phim về Cao Mỹ Lệ hay còn được gọi là Camille
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Event;
