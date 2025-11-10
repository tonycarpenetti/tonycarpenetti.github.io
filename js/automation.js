// automation.js 
// console.log('automation.js is loaded');

window.onload = function() {
    document.body.classList.add('fly-in');  // Add the class to trigger the transition
};


window.addEventListener("DOMContentLoaded", () => {
  const resumeDate = "10-23-25";
  const link = document.getElementById("resume-link");
  const thumbnail = document.getElementById("resume-thumbnail");

  if (link) link.href = `/images/Tony-Carpenetti-Resume_${resumeDate}.pdf`;
  if (thumbnail) thumbnail.src = `/images/resume-thumbnail_${resumeDate}.png`;
});


const starsContainer = document.querySelector('.stars-container');
const numStars = 150 // Number of stars to generate

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`; // Random horizontal position
  star.style.top = `${Math.random() * 100}%`; // Random vertical position
  star.style.width = `${Math.random() * 3 + 1}px`; // Random size
  star.style.height = star.style.width; // Keep star circular
  star.style.animationDelay = `${Math.random() * 2}s`; // Randomize animation start
  starsContainer.appendChild(star);
}