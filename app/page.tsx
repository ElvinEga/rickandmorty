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
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("/location");
        setLocationResponse(response.data);
        // setLocations(locationResponse?.results || []);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);
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
          />
        </main>
      </div>
    </>
  );
}
