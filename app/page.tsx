"use client";

import HeroSection from "@/components/hero";
import LocationSection from "@/components/locations";
import Navbar from "@/components/navbar";
import axios from "../api/axios";

import Head from "next/head";
import { useEffect, useState } from "react";
import { LocationResponse, Result } from "@/api/data/locationResponse";

export default function Home() {
  const [locations, setLocations] = useState<Result[]>([]);
  const [locationResponse, setLocationResponse] = useState<LocationResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    fetchLocations(currentPage);
  }, [currentPage]);
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
          <HeroSection />

          <LocationSection
            results={locationResponse?.results || []}
            info={locationResponse?.info}
            fetchMoreLocations={() =>
              setCurrentPage((prevPage) => prevPage + 1)
            }
            isLoading={isLoading}
          />
        </main>
      </div>
    </>
  );
}
