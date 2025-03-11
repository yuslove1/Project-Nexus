// pages/api/locations.ts
import { NextApiRequest, NextApiResponse } from "next";

const mockLocations = ["Remote", "New York, NY", "San Francisco, CA", "Lagos, NG"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => {
    res.status(200).json(mockLocations);
  }, 500); // 500ms delay
}