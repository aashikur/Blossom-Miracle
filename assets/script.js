document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.blossom-button');
  const audio = document.getElementById('background-audio');
  const text = document.getElementById('dream-text');

  setTimeout(() => {
      button.classList.add('animated-click');
      setTimeout(() => {
          button.classList.remove('animated-click');
      }, 500);
  }, 2000);

  button.addEventListener("click", function() {
      document.body.classList.remove("not-loaded");
      audio.muted = false;
      audio.play();
      
      setTimeout(() => {
          button.classList.add("fade-out");
          setTimeout(() => {
              button.remove();
              document.body.classList.remove("background-style");
              // text.style.display = "block"; // Show the text after button is hidden
              setTimeout(() => {
                  text.style.animation = "fadeOutText 2s forwards"; // Fade out the text
                  text.style.display = "block"; // Fade out the text
              }, 3000); // Time the text stays visible before starting to fade out
          }, 500);
      }, 100); // Small delay to ensure the "not-loaded" class is removed first
  });
});
