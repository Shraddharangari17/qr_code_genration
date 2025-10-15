function generateQR() {
      const text = document.getElementById('qrInput').value.trim();
      const qrOutput = document.getElementById('qrOutput');

      if (!text) {
        qrOutput.innerHTML = "<p style='color:red;'>⚠️ Please enter some text!</p>";
        return;
      }

      const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
      qrOutput.innerHTML = `<img src="${qrURL}" alt="QR Code"><p>✅ QR Code Generated!</p>`;
    }
