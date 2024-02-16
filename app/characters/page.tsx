"use client";

import Navbar from "@/components/navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { CharacterRepsonse } from "@/api/data/characterResponse";
import Link from "next/link";
import Footer from "@/components/footer";

export default function CharacterPage() {
  const [characters, setCharacters] = useState<CharacterRepsonse[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`/character`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters();
  }, []);
  return (
    <>
      <Head>
        <title>Rick and Morty Universe</title>
        <meta name="Rick  and Morty Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper relative z-[1]">
        <Navbar />
        <main className="main-wrapper relative overflow-hidden">
          <>
            {/* Start Hero */}
            {location ? (
              <>
                <section className="relative table w-full py-32 lg:py-40 bg-[url('/assets/img/header.jpg')] bg-cover bg-center">
                  <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                      <h3 className="text-6xl leading-normal font-bold">
                        Characters
                      </h3>
                    </div>
                  </div>
                </section>
                <section className="relative md:py-24 py-16">
                  <div className="container">
                    <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                      {characters.map((character) => (
                        <Link
                          className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href={`/character?id=${character.id}`}
                        >
                          <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-56 h-56">
                              <img
                                className="group-hover:scale-125 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                src={character.image}
                                alt="Image Description"
                              />
                            </div>
                            <div className="grow sm:mt-0 sm:ms-6 px-4 sm:px-0">
                              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {character.name}
                              </h3>
                              <p>
                                {character.status} - {character.species}
                              </p>
                              <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Location
                              </p>
                              <p className=" text-lg text-gray-800 dark:text-gray-400">
                                {character.location.name}
                              </p>
                              <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Gender
                              </p>
                              <p className=" text-lg text-gray-800 dark:text-gray-400">
                                {character.gender}
                              </p>
                              <Link
                                href={`/character?id=${character.id}`}
                                className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium"
                              >
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
                              </Link>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <div className="flex justify-center">
                <div
                  className="animate-spin inline-block h-16 w-16 m-44 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {/* End */}
          </>
        </main>
        <Footer />
      </div>
    </>
  );
}
