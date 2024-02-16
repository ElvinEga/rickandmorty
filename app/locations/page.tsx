"use client";

import Navbar from "@/components/navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import {
  LocationData,
  LocationResponse,
  Result,
} from "@/api/data/locationResponse";
import Link from "next/link";
import LocationSection from "@/components/locations";
import Footer from "@/components/footer";

export default function Location() {
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
        <meta name="Rick  and Morty Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper relative z-[1]">
        <Navbar />
        <main className="main-wrapper relative overflow-hidden">
          <>
            {/* Start Hero */}
            <>
              <section className="relative table w-full py-32 lg:py-40 bg-[url('/assets/img/header2.jpg')] bg-cover bg-center">
                <div className="container">
                  <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-6xl leading-normal font-bold">
                      Locations
                    </h3>
                  </div>
                </div>
              </section>
              <LocationSection
                results={locations || []}
                info={locationResponse?.info}
                fetchMoreLocations={() =>
                  setCurrentPage((prevPage) => prevPage + 1)
                }
                isLoading={isLoading}
              />
            </>
          </>
        </main>
        <Footer />
      </div>
    </>
  );
}
