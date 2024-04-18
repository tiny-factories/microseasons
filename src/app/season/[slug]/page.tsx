"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface SeasonDetail {
  name: string;
  start: string;
  end: string;
  description: string;
  nameJapanese: string;
  imageUrl: string;
  soundUrl: string;
  slug: string;
}

export default function SeasonPage() {
  const [seasonDetail, setSeasonDetail] = useState<SeasonDetail | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSeasonData = async () => {
      if (!router.isReady) return; // Ensure router is ready
      const response = await fetch(`/api/season/${router.query.slug}`);
      const data = await response.json();
      setSeasonDetail(data);
    };

    fetchSeasonData();
  }, [router.isReady, router.query.slug]);

  return (
    <div className="p-4">
      {seasonDetail ? (
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <Link href="/seasons">
            <a className="text-blue-500 hover:text-blue-700">
              Back to seasons list
            </a>
          </Link>
          <Image
            src={seasonDetail.imageUrl}
            alt={seasonDetail.name}
            width={1920} // Adjust according to your desired aspect ratio
            height={192}
            objectFit="cover"
            layout="responsive"
          />
          <div className="p-4">
            <div className="text-xl font-semibold">
              {seasonDetail.name} ({seasonDetail.nameJapanese})
            </div>
            <p className="text-gray-600">{seasonDetail.description}</p>
            <p className="text-sm">
              Starts: {seasonDetail.start} - Ends: {seasonDetail.end}
            </p>
            <audio controls src={seasonDetail.soundUrl}>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ) : (
        <p>Loading season details...</p>
      )}
    </div>
  );
}
