import QRCode from 'qrcode';

export default async function handler(req, res) {
  const url = 'https://www.findhome.work';

  try {
    console.log('Generating QR code for URL:', url);
    const qrCodeBuffer = await QRCode.toBuffer(url, { errorCorrectionLevel: 'H' });
    console.log('QR code generated successfully');

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename="landsurvey_qr.png"');
    res.send(qrCodeBuffer);
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Error generating QR code');
  }
}
