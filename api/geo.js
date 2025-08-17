// Vercel serverless function — reads edge headers for country/city
export default async (req, res) => {
  const country = req.headers['x-vercel-ip-country'] || 'Unknown';
  const city    = req.headers['x-vercel-ip-city'] || '';
  res.status(200).json({ country, city });
};
