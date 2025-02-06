
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

    window.addEventListener('click', function() {
      var audio = document.getElementById('background-audio');
      audio.muted = false;  // Unmute when user clicks anywhere
      audio.play();
    }, { once: true });  // Ensures it runs only once
