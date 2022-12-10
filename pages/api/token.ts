// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const token = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const response = await axios.post(
      "https://api.assemblyai.com/v2/realtime/token",
      { expires_in: 3600 },
      {
        headers: {
          authorization: process.env.ASSEMBLY_AI_API_TOKEN,
        },
      }
    );
    const { data } = response;
    res.json(data);
  } catch (error: any) {
    const {
      response: { status, data },
    } = error;
    res.status(status).json(data);
  }
};

export default token;
