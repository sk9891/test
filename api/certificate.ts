// pages/api/certificate.js

export default function handler(req: any, res: any) {
  // Proxy the request to the external URL
  res.redirect(
    302,
    "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS108S63430630720118843"
  );
}
