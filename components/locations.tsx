"use client";

import Link from "next/link";

const LocationSection = () => {
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Featured Properties
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        {/*end grid*/}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
            <div className="relative">
              <img
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/bird-World-Rick-and-Morty.jpg?q=50&fit=crop&w=1500&dpr=1.5"
                alt=""
                className="h-64 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white">
                  Planet
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="pb-2">
                <a
                  href="property-detail.html"
                  className="text-lg text-black hover:text-indigo-600 font-medium ease-in-out duration-500"
                >
                  Citadel of Ricks
                </a>

                <p className="text-lg text-slate-500 hover:text-indigo-600 font-medium ease-in-out duration-500">
                  Dimension
                </p>
              </div>
              <ul className="flex justify-between items-center list-none">
                <li>
                  <p className="text-lg font-medium">Characters</p>
                </li>
              </ul>
              <div className="flex -space-x-2 pt-3">
                <div className="hs-tooltip inline-block">
                  <img
                    className="hs-tooltip-toggle relative inline-block w-44 rounded-full ring-2 ring-white hover:z-10"
                    src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                    alt="Image Description"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                    role="tooltip"
                  >
                    James
                  </span>
                </div>
                <div className="hs-tooltip inline-block">
                  <img
                    className="hs-tooltip-toggle relative inline-block w-44 rounded-full ring-2 ring-white hover:z-10"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Maria
                  </span>
                </div>
                <div className="hs-tooltip inline-block">
                  <img
                    className="hs-tooltip-toggle relative inline-block w-44 rounded-full ring-2 ring-white hover:z-10"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Anna
                  </span>
                </div>
                <div className="hs-tooltip inline-block">
                  <img
                    className="hs-tooltip-toggle relative inline-block w-44 rounded-full ring-2 ring-white hover:z-10"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Brian
                  </span>
                </div>
                <button
                  id="hs-avatar-group-dropdown"
                  className="hs-dropdown-toggle inline-flex items-center justify-center w-44 rounded-full bg-white border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
                >
                  <span className="font-medium leading-none">9+</span>
                </button>
              </div>
            </div>
          </div>
          {/*end property content*/}
        </div>
        {/*en grid*/}
        <div className="md:flex justify-center text-center mt-6">
          <div className="md:w-full">
            <a
              href="property-listing.html"
              className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              View More Properties <i className="uil uil-arrow-right ml-1" />
            </a>
          </div>
        </div>
      </div>
      {/*end container*/}
    </>
  );
};

export default LocationSection;
