$(document).ready(function() {
    $('.button').tilt({
        scale: 1.2,
        speed: 800,
        glare: true,
        maxGlare: 0.3,
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const btnDrop = document.querySelector('.btn-top');
    const blocLinks = document.querySelector('.bloc-links');
  
    btnDrop.addEventListener('click', () => {
      const isClosed = blocLinks.style.height === '' || blocLinks.style.height === '0px';
  
      if (isClosed) {
        const fullHeight = blocLinks.scrollHeight;
        blocLinks.style.height = fullHeight + "px";
        console.log("Ouverture : height =", fullHeight);
      } else {
        blocLinks.style.height = "0px";
        console.log("Fermeture");
      }
    });
  });
  