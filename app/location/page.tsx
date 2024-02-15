import HeroSection from "@/components/hero";
import LocationSection from "@/components/locations";
import Navbar from "@/components/navbar";

import Head from "next/head";

export default function Location() {
  return (
    <>
      <Head>
        <title>Rick and Morty Universe</title>
        <meta
          name="Rick  and Morty Universe"
          content="Utilizing AI, IOT & Geo-Information to Enhance Ecological, Agricultural and Economic Resilience & Sustainability Across Africa and BeyondLeading with Data for a Greener Future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper relative z-[1]">
        <Navbar />
        <main className="main-wrapper relative overflow-hidden">
          <>
            {/* Start Hero */}
            <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
              <div className="container">
                <div className="grid grid-cols-1 text-center mt-10">
                  <h3 className="text-3xl leading-normal font-medium">
                    Citadel of Rick
                  </h3>
                </div>
                {/*end grid*/}
              </div>
              {/*end container*/}
            </section>
            {/*end section*/}

            {/* End Hero */}

            {/* Start */}
            <section className="relative md:py-24 py-16">
              <div className="container">
                {/* Grid */}
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                  {/* Card */}
                  <a
                    className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="sm:flex">
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-56 h-56">
                        <img
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow sm:mt-0 sm:ms-6 px-4 sm:px-0">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          Lawyer Morty
                        </h3>
                        <p>unknown - Human</p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Citadel of Rick
                        </p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Gender
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Male
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                          Read more
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                  {/* Card */}
                  <a
                    className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="sm:flex">
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-56 h-56">
                        <img
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow sm:mt-0 sm:ms-6 px-4 sm:px-0">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          Lawyer Morty
                        </h3>
                        <p>unknown - Human</p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Citadel of Rick
                        </p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Gender
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Male
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                          Read more
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                  {/* Card */}
                  <a
                    className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="sm:flex">
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-56 h-56">
                        <img
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow sm:mt-0 sm:ms-6 px-4 sm:px-0">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          Lawyer Morty
                        </h3>
                        <p>unknown - Human</p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Citadel of Rick
                        </p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Gender
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Male
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                          Read more
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                  {/* Card */}
                  <a
                    className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="sm:flex">
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-56 h-56">
                        <img
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow sm:mt-0 sm:ms-6 px-4 sm:px-0">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          Lawyer Morty
                        </h3>
                        <p>unknown - Human</p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Citadel of Rick
                        </p>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Gender
                        </p>
                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                          Male
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                          Read more
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Card */}
                </div>
                {/* End Grid */}
                <div className="grid md:grid-cols-12 grid-cols-1 mt-16">
                  <div className="md:col-span-12 text-center">
                    <a
                      href=""
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                    >
                      <i className="uil uil-process mdi-spin me-1" /> Load More
                    </a>
                  </div>
                </div>
                {/*end grid*/}
              </div>
              {/*end container*/}
            </section>
            {/*end end section*/}
            {/* End */}
          </>
        </main>
      </div>
    </>
  );
}
