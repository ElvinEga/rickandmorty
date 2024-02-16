"use client";

import HeroSection from "@/components/hero";
import LocationSection from "@/components/locations";
import Navbar from "@/components/navbar";
import axios from "../api/axios";

import Head from "next/head";
import { useEffect, useState } from "react";
import { LocationResponse, Result } from "@/api/data/locationResponse";
import { CharacterRepsonse } from "@/api/data/characterResponse";
import CharacterList from "@/components/CharacterList";
import FooterSection from "@/components/footer";

export default function Home() {
  const [locations, setLocations] = useState<Result[]>([]);
  const [locationResponse, setLocationResponse] = useState<LocationResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterRepsonse[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchLocations = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/location?page=${page}`);
      setLocationResponse(response.data);
      setLocations((prevLocations) => [
        ...prevLocations,
        ...(response.data.results || []),
      ]);
    } catch (error) {
      console.error("Error fetching locations:", error);
    } finally {
      setIsLoading(false); // Set loading state to false, even on error
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchLocations(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`/character/?name=${searchQuery}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchCharacters();
    } else {
      setCharacters([]);
    }
  }, [searchQuery]);

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
          <HeroSection
            results={locations || []}
            handleSearchInputChange={handleSearchInputChange}
          />

          {characters.length > 0 && <CharacterList characters={characters} />}

          <LocationSection
            results={locations || []}
            info={locationResponse?.info}
            fetchMoreLocations={() =>
              setCurrentPage((prevPage) => prevPage + 1)
            }
            isLoading={isLoading}
          />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
