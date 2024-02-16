"use client";

import Navbar from "@/components/navbar";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { CharacterRepsonse } from "@/api/data/characterResponse";
import { LocationData } from "@/api/data/locationResponse";
import Link from "next/link";
interface CharacterListProps {
  characters: CharacterRepsonse[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  // const [characters, setCharacters] = useState<CharacterRepsonse[]>([]);

  return (
    <>
      <div>
        {/* Start Hero */}
        <section className="relative pt-16">
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Search Results
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Find in the world of Rick and Morty characters. Here are the
                results for what you are looking for.
              </p>
            </div>
            <div className="grid lg:grid-cols-6 lg:gap-y-16 gap-4">
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CharacterList;
