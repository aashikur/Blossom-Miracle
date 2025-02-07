  /* 
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

    // Button Click 
    document.addEventListener("DOMContentLoaded", function() {
      const button = document.querySelector('.blossom-button');
      setTimeout(() => {
          button.classList.add('animated-click');
          setTimeout(() => {
              button.classList.remove('animated-click');
          }, 500);
      }, 2000);
  // button remove 
      button.addEventListener("click", function() {
        document.body.classList.remove("background-style");
        button.classList.add("fade-out");
        setTimeout(() => {
            button.remove();
        }, 500);
    });

  });

*/

document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.blossom-button');
  const audio = document.getElementById('background-audio');

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
          }, 500);
      }, 100); // Small delay to ensure the "not-loaded" class is removed first
  });
});