    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
      document.getElementById("android-content").classList.add("active");
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      document.getElementById("ios-content").classList.add("active");
    } else {
      document.getElementById("desktop-content").classList.add("active");
    }

const url = "https://niko111199.github.io/DownloadRoyalGO/";

    const qr = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 450,
      height: 450,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
