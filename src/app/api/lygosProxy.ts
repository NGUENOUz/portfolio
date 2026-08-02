import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  link?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://api.lygosapp.com/v1/gateway', {
        method: 'POST',
        headers: {
          'api-key': 'lygosapp-cd79b88c-1318-4e88-abff-804a77da140d',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error: unknown) { // Utilisation de 'unknown'
      if (error instanceof Error) {
        console.error('Error proxying request:', error.message);
        res.status(500).json({ error: error.message });
      } else {
        console.error('Unknown error proxying request:', error);
        res.status(500).json({ error: 'Unknown proxy error' });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}