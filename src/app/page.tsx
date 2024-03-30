"use client";
import { useState, useEffect } from "react";
import data from "../../public/microseasons.json";

interface Microseason {
  name: string;
  start: string;
  end: string;
  description: string;
  nameJapanese: string;
}

export default function Home() {
  const [currentSeason, setCurrentSeason] = useState<Microseason | null>(null);

  useEffect(() => {
    const today = new Date();
    const currentSeason = data.find((season) => {
      const startDate = new Date(season.start);
      const endDate = new Date(season.end);
      return startDate <= today && endDate >= today;
    });
    setCurrentSeason(currentSeason || null);
  }, []);

  return (
    <div className="p-4 flex flex-col justify-between h-screen">
      {currentSeason ? (
        <div className="border p-4 rounded shadow flex-1 flex flex-col justify-between">
          <div className="text-center">
            <h2 className="text-4xl font-semibold my-4 mx-auto self-center">
              {currentSeason.name} ({currentSeason.nameJapanese})
            </h2>
            <p className="my-2">{currentSeason.description}</p>
          </div>
          <footer className="text-center p-4">
            <p>
              <span className="font-medium">Start:</span> {currentSeason.start}{" "}
              - <span className="font-medium">End:</span> {currentSeason.end}
            </p>
          </footer>
        </div>
      ) : (
        <p>Currently, there is no season data available.</p>
      )}
    </div>
  );
}
