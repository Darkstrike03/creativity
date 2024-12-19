 function switchTab(type) {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            document.querySelector(`.tab[onclick="switchTab('${type}')"]`).classList.add('active');

            const inputLabel = document.querySelector('.input-group label');
            if (type === 'text') {
                inputLabel.textContent = 'Enter Your Text:';
                document.getElementById('input').placeholder = 'Type something...';
            } else if (type === 'url') {
                inputLabel.textContent = 'Enter URL:';
                document.getElementById('input').placeholder = 'https://example.com';
            } else if (type === 'wifi') {
                inputLabel.textContent = 'Enter Wi-Fi Details:';
                document.getElementById('input').placeholder = 'Wi-Fi SSID, Password';
            } else if (type === 'email') {
                inputLabel.textContent = 'Enter Email Details:';
                document.getElementById('input').placeholder = 'email@example.com';
            }
        }

        async function generateQRCode() {
    const canvas = document.getElementById('qrCanvas');
    const input = document.getElementById('input').value;

    // Adjust canvas size to include the frame
    const frameSize = 50; // Size of the frame
    const qrSize = 250; // QR code size
    canvas.width = qrSize + frameSize * 2;
    canvas.height = qrSize + frameSize * 2;

    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    try {
        // Draw the background frame
        ctx.fillStyle = '#0078d7'; // Frame color (your branding color)
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Generate the QR code in the center of the frame
        const qrCanvas = document.createElement('canvas');
        await QRCode.toCanvas(qrCanvas, input, { width: qrSize, margin: 2 });

        const qrX = frameSize; // Position QR code within the frame
        const qrY = frameSize;
        ctx.drawImage(qrCanvas, qrX, qrY);

        // Add your logo to the center of the QR code
        const logo = new Image();
        logo.src = "#"; // Replace with your logo path
        logo.onload = () => {
            const logoSize = 50; // Adjust logo size
            const x = (canvas.width - logoSize) / 2;
            const y = (canvas.height - logoSize) / 2;
            ctx.drawImage(logo, x, y, logoSize, logoSize);
        };

        // Add text below the QR code as an ad
        ctx.fillStyle = '#ffffff'; // Text color
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Powered by Arcadia', canvas.width / 2, qrY + qrSize + 30);
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
}


        function downloadQRCode(format) {
            const canvas = document.getElementById('qrCanvas');
            const link = document.createElement('a');
            if (format === 'png') {
                link.href = canvas.toDataURL('image/png');
                link.download = 'qr-code.png';
            } else if (format === 'svg') {
                QRCode.toString(document.getElementById('input').value, { type: 'svg' }, function (err, svg) {
                    const blob = new Blob([svg], { type: 'image/svg+xml' });
                    link.href = URL.createObjectURL(blob);
                    link.download = 'qr-code.svg';
                    link.click();
                });
                return;
            }
            link.click();
        }