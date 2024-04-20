import { NextApiRequest, NextApiResponse } from "next";
import microseasons from "../../../public/microseasons.json";

const generateICS = (microseasons: any) => {
  const icsEvents = microseasons
    .map((season: any) => {
      return `BEGIN:VEVENT
SUMMARY:${season.name}
DTSTART;VALUE=DATE:${season.start.replaceAll("-", "")}
DTEND;VALUE=DATE:${season.end.replaceAll("-", "")}
DESCRIPTION:${season.description}
END:VEVENT`;
    })
    .join("\n");

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//Microseasons Calendar//EN
${icsEvents}
END:VCALENDAR`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const icsData = generateICS(microseasons);
  res.setHeader("Content-Type", "text/calendar");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="tiny-seasons.ics"'
  );
  res.send(icsData);
}
