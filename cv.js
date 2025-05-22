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
        // calcule automatiquement la hauteur totale nécessaire pour afficher tout le contenu.
        const fullHeight = blocLinks.scrollHeight; 
        // ouvre le bloc en l’animant.
        blocLinks.style.height = fullHeight + "px";
        console.log("Ouverture : height =", fullHeight);
        // referme le bloc.
      } else {
        blocLinks.style.height = "0px";
        console.log("Fermeture");
      }
    });
  });

const faders = document.querySelectorAll
  ('.fade-in');

const appearOptions = {
  threshold : 0,
  rootMargin: "0px 0px -400px 0px"
}; 
const appearOnScroll = new IntersectionObserver
  (function(
    entries, 
    appearOnScroll
  ){
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, 
    appearOptions);
      faders.forEach(fader => {
      appearOnScroll.observe(fader);
})
  


const buttons = document.querySelectorAll
('.fade-in-btn');

const buttonsOptions = {
  threshold: 0,
  rootMargin: "0px 0px -400px 0px" 
};

const buttonsObserver = new IntersectionObserver
  (function(
    entries, 
    observer
  ){
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, 
  buttonsOptions);
    buttons.forEach(button => {
    buttonsObserver.observe(button);
});