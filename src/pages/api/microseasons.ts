import microseasons from "../../../public/microseasons.json";

export default function handler(req, res) {
  res.status(200).json(microseasons);
}
