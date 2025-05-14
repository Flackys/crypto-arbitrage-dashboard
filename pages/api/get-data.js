let cachedData = [];

export default function handler(req, res) {
  res.status(200).json(cachedData);
}

export const setCachedData = (data) => {
  cachedData = data;
};