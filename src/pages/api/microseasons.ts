import { NextApiRequest, NextApiResponse } from 'next';
import microseasons from "../../../public/microseasons.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(microseasons);
}
