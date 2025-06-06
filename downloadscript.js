    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
      document.getElementById("android-content").classList.add("active");
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      document.getElementById("ios-content").classList.add("active");
    } else {
      document.getElementById("desktop-content").classList.add("active");
    }

