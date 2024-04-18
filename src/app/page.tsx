"use client";
import { useState, useEffect, useRef } from "react";
import data from "../../public/microseasons.json";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface Microseason {
  name: string;
  start: string;
  end: string;
  description: string;
  nameJapanese: string;
  imageUrl: string;
  soundUrl: string;
  colorMatrix: string[];
  subDivisions?: SubDivision[];
}

interface SubDivision {
  name: string;
  start: string;
  end: string;
  description: string;
  nameJapanese: string;
  imageUrl: string;
  colorMatrix: string[];
  soundUrl: string;
}

export default function Home() {
  const [currentSeason, setCurrentSeason] = useState<Microseason | null>(null);
  const [currentSubDivision, setCurrentSubDivision] =
    useState<SubDivision | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const today = new Date();
    const currentSeason = data.find((season) => {
      const startDate = new Date(season.start);
      const endDate = new Date(season.end);
      return startDate <= today && endDate >= today;
    });

    if (currentSeason && currentSeason.subDivisions) {
      const currentSubDivision = currentSeason.subDivisions.find(
        (subDivision) => {
          const startDate = new Date(subDivision.start);
          const endDate = new Date(subDivision.end);
          return startDate <= today && endDate >= today;
        }
      );
      setCurrentSubDivision(currentSubDivision || null);
    }

    setCurrentSeason(currentSeason || null);
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const createGradient = (colors: string[]) =>
    `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <div className="flex flex-row justify-between h-screen w-screen">
      {currentSeason && currentSubDivision ? (
        <>
          <div className="flex h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white dark:bg-black dark:bg-opacity-30">
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <div>
                <div className="uppercase text-sm font-semibold">season:</div>
                <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
                  {currentSeason.name}
                </h2>
              </div>

              <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
                <div className="uppercase text-sm font-semibold">kō:</div>
                {currentSubDivision.name} / {currentSubDivision.nameJapanese}
              </h2>
              <p className="mb-6 text-black dark:text-white">
                {currentSubDivision.description}
              </p>
              <p className="text-black dark:text-white">
                <span className="font-medium">Start:</span>{" "}
                {currentSubDivision.start} <br />
                <span className="font-medium">End:</span>{" "}
                {currentSubDivision.end}
              </p>
              <p className="mt-4 uppercase font-semibold text-black dark:text-white">
                {(() => {
                  const endDate = new Date(currentSubDivision.end);
                  const today = new Date();
                  const remainingDays = Math.ceil(
                    (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
                  );
                  return `Days left: ${remainingDays}`;
                })()}
              </p>
            </div>
            <div className="w-1/2 relative">
              <Image
                src={currentSeason.imageUrl}
                alt={currentSeason.name}
                layout="fill"
                objectFit="contain"
                className="border border-black"
              />
            </div>
          </div>
          <audio ref={audioRef} src={currentSeason.soundUrl} loop />
          <button
            onClick={togglePlay}
            className="absolute bottom-4 left-4 bg-gray-800 text-white p-2 rounded-full"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </>
      ) : (
        <div className="flex h-full w-full">
          <div className="w-1/2 p-8 flex flex-col justify-center items-center">
            <div className="animate-pulse flex flex-col h-full w-full justify-center items-center">
              <div className="bg-gray-300 h-12 w-3/4 mb-4"></div>
              <div className="bg-gray-300 h-6 w-5/6 mb-2"></div>
              <div className="bg-gray-300 h-6 w-5/6 mb-2"></div>
              <div className="bg-gray-300 h-6 w-5/6"></div>
            </div>
          </div>
          <div className="w-1/2 animate-pulse">
            <div className="bg-gray-300 h-full w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}
