import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.mlb.com/v1/teams');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams data' });
  }
}
