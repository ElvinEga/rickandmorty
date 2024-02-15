import HeroSection from "@/components/hero";
import LocationSection from "@/components/locations";
import Navbar from "@/components/navbar";

import Head from "next/head";

export default function Character() {
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
            <section className="relative table w-full md:pb-24 pb-16 mt-28">
              <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-6 md:col-span-5">
                    <div className="sticky top-20">
                      <img
                        src="https://rickandmortyapi.com/api/character/avatar/200.jpeg"
                        className="rounded-md shadow-md dark:shadow-gray-800 h-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-6 md:col-span-7">
                    <div className="">
                      <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                        Lawyer Morty
                      </h5>
                      <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
                        <div>
                          <h6 className="text-lg font-semibold">Location:</h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            Earth (Replacement Dimension)
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold">Origin:</h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            Earth (Replacement Dimension)
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold mt-4">
                            Species:
                          </h6>
                          <h6 className="text-2xl font-semibold mt-2">Human</h6>
                          <h6 className="text-slate-400 mt-4">
                            <span>Status </span> Unkown
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold mt-4">
                            Gender:
                          </h6>
                          <h6 className="text-2xl font-semibold mt-2">Male</h6>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mt-8">
                        <div id="StarterContent">
                          <div
                            className=""
                            id="tuesday"
                            role="tabpanel"
                            aria-labelledby="tuesday-tab"
                          >
                            <div className="grid grid-cols-1">
                              <p className="text-slate-400 mb-4">
                                Hey guys! New exploration about NFT Marketplace
                                Web Design, this time I'm inspired by one of my
                                favorite NFT website called Superex (with crypto
                                payment)! What do you think?
                              </p>
                              <p className="text-slate-400 mb-4">
                                What does it mean? Biomechanics is the study of
                                the structure, function and motion of the
                                mechanical aspects of biological systems, at any
                                level from whole organisms to organs, cells and
                                cell organelles, using the methods of mechanics.
                                Biomechanics is a branch of biophysics.
                              </p>
                            </div>
                          </div>
                          <div
                            className="hidden"
                            id="wednesday"
                            role="tabpanel"
                            aria-labelledby="wednesday-tab"
                          >
                            <div className="grid grid-cols-1">
                              <div className="flex items-center">
                                <div className="relative">
                                  <img
                                    src="assets/images/client/01.jpg"
                                    className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <h6 className="text-lg font-semibold">
                                    2 WETH{" "}
                                    <span className="text-slate-400">by</span>{" "}
                                    <a
                                      href=""
                                      className="hover:text-indigo-600 duration-500 ease-in-out"
                                    >
                                      0xe849fa28a...ea14
                                    </a>
                                  </h6>
                                  <span className="text-slate-400">
                                    6 hours ago
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center mt-4">
                                <div className="relative">
                                  <img
                                    src="assets/images/client/02.jpg"
                                    className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <h6 className="text-lg font-semibold">
                                    0.001 WETH{" "}
                                    <span className="text-slate-400">by</span>{" "}
                                    <a
                                      href=""
                                      className="hover:text-indigo-600 duration-500 ease-in-out"
                                    >
                                      VOTwear
                                    </a>
                                  </h6>
                                  <span className="text-slate-400">
                                    6 hours ago
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center mt-4">
                                <div className="relative">
                                  <img
                                    src="assets/images/client/03.jpg"
                                    className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <h6 className="text-lg font-semibold">
                                    1.225 WETH{" "}
                                    <span className="text-slate-400">by</span>{" "}
                                    <a
                                      href=""
                                      className="hover:text-indigo-600 duration-500 ease-in-out"
                                    >
                                      PandaOne
                                    </a>
                                  </h6>
                                  <span className="text-slate-400">
                                    6 hours ago
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="hidden"
                            id="thursday"
                            role="tabpanel"
                            aria-labelledby="thursday-tab"
                          >
                            <div className="grid grid-cols-1">
                              <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                                <div className="flex items-center">
                                  <div className="relative">
                                    <img
                                      src="assets/images/nft/items/1.jpg"
                                      className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800"
                                      alt=""
                                    />
                                    <div className="absolute top-0 left-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                      <i className="mdi mdi-account-check mdi-18px text-green-600" />
                                    </div>
                                  </div>
                                  <span className="content ml-3">
                                    <a
                                      href=""
                                      className="hover:text-indigo-600 text-lg block"
                                    >
                                      Digital Art Collection
                                    </a>
                                    <span className="text-slate-400 block mt-1">
                                      Started Following{" "}
                                      <a href="" className="link font-semibold">
                                        @Panda
                                      </a>
                                    </span>
                                    <span className="text-slate-400 block mt-1">
                                      1 hours ago
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
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
