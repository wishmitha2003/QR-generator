function generateQR() {
    let qrText = document.getElementById('qrText').value;
    let qrImage = document.getElementById('qrImage');
    if (qrText.trim() !== "") {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
        qrImage.style.display = 'block';
    } else {
        alert("Please enter text or a URL");
    }
}
