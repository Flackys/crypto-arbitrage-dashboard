import { setCachedData } from './get-data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    setCachedData(req.body);
    res.status(200).json({ message: 'Data updated' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}