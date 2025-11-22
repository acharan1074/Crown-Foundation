// Simple Vercel serverless function to proxy requests to a Google Apps Script
// and add CORS headers so browser requests succeed.
// Deploy this file to Vercel (put under `api/appointments.js` in a Vercel project
// or keep the folder structure when using the Vercel CLI).

// Paste your Apps Script web app URL below for local testing or set it in your
// Vercel/hosting environment as the environment variable `SHEETS_SCRIPT_URL`.
// Example (Vercel): SHEETS_SCRIPT_URL=https://script.google.com/macros/s/XXX/exec
// For local testing you can temporarily keep the URL in the FALLBACK_SCRIPT_URL.
// Replace the value of FALLBACK_SCRIPT_URL with your script URL if you want.
export default async function handler(req, res) {
  const FALLBACK_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby95lG3MD43g69xACTCuGHH96_R2pVU40lMnl5inrdr6SAUMVa1-OUyKVWvFdpMnZl_/exec';
  const SCRIPT_URL = process.env.SHEETS_SCRIPT_URL || FALLBACK_SCRIPT_URL;

  // Add CORS headers for browser
  res.setHeader('Access-Control-Allow-Origin', '*'); // restrict to your origin in production
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  if (!SCRIPT_URL) {
    return res.status(500).json({ ok: false, error: 'SHEETS_SCRIPT_URL not configured' });
  }

  try {
    // Forward the request body to the Apps Script endpoint
    const upstreamRes = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await upstreamRes.text();
    // Mirror status code and body from upstream
    res.status(upstreamRes.status).send(text);
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
}
