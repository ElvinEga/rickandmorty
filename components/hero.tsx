"use client";

import axios from "@/api/axios";
import { CharacterRepsonse } from "@/api/data/characterResponse";
import { Result } from "@/api/data/episodeResponse";
import { LocationResponse } from "@/api/data/locationResponse";
import { useEffect, useState } from "react";

const HeroSection: React.FC<LocationResponse> = ({
  results,
  handleSearchInputChange,
}) => {
  const [episodes, setEpisodes] = useState<Result[]>([]);

  // const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get("/episode");
        setEpisodes(response.data.results);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, []);

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
              <div
                className="grid lg:grid-cols-12 grid-cols-1"
                id="reserve-form"
              >
                <div className="lg:col-span-10 mt-8">
                  <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                    <form action="#">
                      <div className="registration-form text-dark text-start">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                          <div className="filter-search-form relative filter-border">
                            <i className="uil uil-briefcase-alt icons" />
                            <input
                              name="name"
                              type="text"
                              id="characterSearch"
                              onChange={handleSearchInputChange}
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Search your Character"
                            />
                          </div>
                          <div className="mx-1 filter-search-form relative filter-border">
                            <i className="uil uil-map-marker icons" />
                            <select
                              className="py-5 px-4 pe-9 block w-full bg-gray-50  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900  dark:text-gray-400 dark:focus:ring-gray-600"
                              data-trigger=""
                              name="choices-location"
                              id="choices-location"
                              aria-label="Default select example"
                            >
                              <option value="">Location</option>
                              {results.map((location) => (
                                <option key={location.id} value={location.id}>
                                  {location.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="filter-search-form relative filter-border">
                            <i className="uil uil-briefcase-alt icons" />
                            <select
                              className="py-5 px-4 pe-9 block w-full bg-gray-50  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900  dark:text-gray-400 dark:focus:ring-gray-600"
                              data-trigger=""
                              name="choices-type"
                              id="choices-type"
                              aria-label="Default select example"
                            >
                              <option value={1}>Episode Name</option>
                              {episodes.map((episode) => (
                                <option key={episode.id} value={episode.id}>
                                  {episode.name} ({episode.episode})
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            type="submit"
                            id="search"
                            title="Search"
                            name="search"
                            className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn w-100 rounded-xl ml-2"
                          >
                            Search
                          </button>
                        </div>
                        {/*end grid*/}
                      </div>
                      {/*end container*/}
                    </form>
                  </div>
                </div>
                {/*ed col*/}
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
