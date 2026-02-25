export default function handler(req, res) {
  res.json({
    status: 'OK',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
}
