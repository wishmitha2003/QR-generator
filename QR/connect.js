function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrImage = document.getElementById('qrImage');
    const downloadButton = document.getElementById('downloadButton');
    
    if (qrText.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    // Generate the QR Code from an external API (QRServer API)
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=150x150`;

    qrImage.src = qrURL;
    qrImage.style.display = "block"; // Show the QR Code image
    downloadButton.style.display = "block"; // Show the download button
}

function downloadQR() {
    const qrImage = document.getElementById('qrImage');
    const downloadLink = document.createElement('a');
    
    downloadLink.href = qrImage.src;
    downloadLink.download = 'qr-code.png';
    downloadLink.click();
}
