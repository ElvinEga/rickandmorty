"use client";
import axios from "@/api/axios";
import { CharacterRepsonse } from "@/api/data/characterResponse";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Character() {
  const searchParams = useSearchParams();
  const characterId = searchParams.get("id");
  const [character, setCharacter] = useState<CharacterRepsonse | null>(null);
  const [notes, setNotes] = useState<string>("");
  const [savedNote, setSavedNote] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CharacterRepsonse>(
          `/character/${characterId}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Retrieve the saved note from local storage when the component mounts
    const savedNoteFromLocalStorage = localStorage.getItem(
      `characterNotes_${characterId}`
    );
    setSavedNote(savedNoteFromLocalStorage);
  }, [characterId]);

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const handleSaveNotes = async () => {
    try {
      localStorage.setItem(`characterNotes_${characterId}`, notes);
      setSavedNote(notes);
      alert("Notes saved successfully!");
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

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
            <section className="relative table w-full md:pb-24 pb-16 mt-28">
              <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-6 md:col-span-5">
                    <div className="sticky top-20">
                      <img
                        src={character?.image}
                        className="rounded-md shadow-md dark:shadow-gray-800 h-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-6 md:col-span-7">
                    <div className="">
                      <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                        {character?.name}
                      </h5>
                      <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
                        <div>
                          <h6 className="text-lg font-semibold">Location:</h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            {character?.location.name}
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold">Origin:</h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            {character?.location.name}
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold mt-4">
                            Species:
                          </h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            {character?.species}
                          </h6>
                          <h6 className="text-slate-400 mt-4">
                            <span>Status </span>
                            {character?.status}
                          </h6>
                        </div>
                        <div>
                          <h6 className="text-lg font-semibold mt-4">
                            Gender:
                          </h6>
                          <h6 className="text-2xl font-semibold mt-2">
                            {character?.gender}
                          </h6>
                        </div>
                      </div>
                      <div>
                        {savedNote && (
                          <div
                            className="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:border-gray-700"
                            role="alert"
                          >
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <svg
                                  className="flex-shrink-0 size-4 text-blue-600 mt-1"
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
                                  <circle cx={12} cy={12} r={10} />
                                  <path d="M12 16v-4" />
                                  <path d="M12 8h.01" />
                                </svg>
                              </div>
                              <div className="ms-3">
                                <h3 className="text-gray-800 font-semibold dark:text-white">
                                  Saved Note
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                                  {savedNote}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        <form className="w-full mt-8">
                          <label
                            htmlFor="notes"
                            className="block text-sm font-medium mb-2 dark:text-white"
                          >
                            Notes
                          </label>
                          <textarea
                            id="notes"
                            value={notes}
                            onChange={handleNotesChange}
                            className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            rows={4}
                            placeholder="Add a Note ..."
                            defaultValue={""}
                          />

                          <button
                            type="button"
                            className="mt-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={handleSaveNotes}
                          >
                            Save Notes
                          </button>
                        </form>
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
