const https = require('https');

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const data = JSON.stringify({
      records: [{
        fields: {
          'Email': email,
          'Signed Up At': new Date().toISOString()
        }
      }]
    });

    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.airtable.com',
        path: `/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
      };

      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', chunk => body += chunk);
        response.on('end', () => {
          if (response.statusCode >= 200 && response.statusCode < 300) {
            resolve(body);
          } else {
            reject(new Error(`Airtable ${response.statusCode}: ${body}`));
          }
        });
      });

      request.on('error', reject);
      request.write(data);
      request.end();
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Signup error:', err.message);
    return res.status(500).json({ error: 'Failed to save signup', detail: err.message });
  }
};
