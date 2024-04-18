"use client";
import { useEffect, useState, Suspense } from "react";
import data from "../../../public/microseasons.json";
import Link from "next/link";

import LoadingTemplate from "./loading";

interface Microseason {
  name: string;
  start: string;
  end: string;
  description: string;
  nameJapanese: string;
  imageUrl: string; // Added imageUrl to the interface
  slug: string;
}

export default function Home() {
  const [seasons, setSeasons] = useState<Microseason[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSeasons(data);
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<LoadingTemplate />}>
      <div className="p-4 grid grid-cols-3 gap-4 justify-between h-screen">
        <h1 className="col-span-3 text-3xl font-bold text-center mb-4">
          Microseasons Gallery
        </h1>
        {!isLoading ? (
          seasons.map((season, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg h-48"
            >
              <Link href={`/season/${season.slug}`}>
                <div>
                  {/* <img
                    src={season.imageUrl}
                    alt={season.name}
                    className="w-full h-48 object-cover"
                  /> */}
                  <div className="p-4">
                    <div className="text-xl font-semibold">
                      {season.name} ({season.nameJapanese})
                    </div>
                    <p className="text-gray-600">{season.description}</p>
                    <div className="mt-auto">
                      <p className="text-sm">
                        Starts: {season.start} - Ends: {season.end}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-3">No season data available.</p>
        )}
      </div>
    </Suspense>
  );
}
