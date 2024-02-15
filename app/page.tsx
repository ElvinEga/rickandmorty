import HeroSection from "@/components/hero";
import LocationSection from "@/components/locations";
import Navbar from "@/components/navbar";

import Head from "next/head";

export default function Home() {
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
          <LocationSection />
        </main>
      </div>
    </>
  );
}
