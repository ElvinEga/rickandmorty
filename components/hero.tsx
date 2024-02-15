"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <>
        {/* Start Hero */}
        <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
          <div
            className="absolute inset-0  bg-no-repeat bg-bottom"
            style={{ backgroundImage: "url('assets/img/hero.png')" }}
          />
          <div className="container">
            <div className="grid grid-cols-1 items-center mt-10">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
                Explore Rick and Morty <br /> Multiverse of Mayhem
              </h4>
              <p className="text-lg max-w-xl">
                Explore the characters, locations, and lore of Rick and Morty
                with in-depth analysis, fan theories, and Wubba Lubba Dub Dub!
              </p>
              <div className="mt-8">
                <a
                  href=""
                  className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Discover
                </a>
              </div>
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </section>
        {/*end section*/}
        {/* End Hero */}
      </>
    </>
  );
};

export default HeroSection;
