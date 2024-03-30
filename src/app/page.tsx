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
    <div className="p-4">
      {currentSeason ? (
        <div className="border p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">
            {currentSeason.name} ({currentSeason.nameJapanese})
          </h2>
          <p className="my-2">{currentSeason.description}</p>
          <p>
            <span className="font-medium">Start:</span> {currentSeason.start} -{" "}
            <span className="font-medium">End:</span> {currentSeason.end}
          </p>
        </div>
      ) : (
        <p>Currently, there is no season data available.</p>
      )}
    </div>
  );
}
