import { NextApiRequest, NextApiResponse } from "next";
import ical from "ical-generator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const calendar = ical({
    name: "Tiny Seasons",
  });

  // Fetching data directly from the local JSON file for simplicity
  const microseasons = await import("../../../public/microseasons.json");

  microseasons.default.forEach((season) => {
    calendar.createEvent({
      start: new Date(season.start),
      end: new Date(season.end),
      summary: season.name,
      description: season.description,
    });
  });

  res.setHeader("Content-Type", "text/calendar");
  res.send(calendar.toString());
}
