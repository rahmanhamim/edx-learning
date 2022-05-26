// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface CommentData {
  username: string;
  comment: string;
  date: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentData[]>
) {
  res.status(200).json([
    {
      username: "chibuike_edochie",
      date: "20-Mar-22",
      comment: "Thanks for the information and the provided alternative.",
    },
    {
      username: "kwesten",
      date: "23-May-22",
      comment:
        "I cannot find the 'get started' button. I managed to start the 30 days trial but keep turning in circles trying to find out how to get started. My screen just doesn't look like the example :( I always end up here",
    },
  ]);
}
