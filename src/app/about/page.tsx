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
  const [items, setItems] = useState<Microseason[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">Japan Microseasons API</h1>
      <p className="mb-4">
        This API provides information about the microseasons of Japan.
      </p>
      <p className="mb-4">
        To use the API, make a GET request to{" "}
        <code className="bg-gray-100 p-1 rounded">/api/microseasons</code>.
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">
              {item.name} ({item.nameJapanese})
            </h2>
            <p className="my-2">{item.description}</p>
            <p>
              <span className="font-medium">Start:</span> {item.start} -{" "}
              <span className="font-medium">End:</span> {item.end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
