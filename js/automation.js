// automation.js 
// console.log('automation.js is loaded');

window.onload = function() {
    document.body.classList.add('fly-in');  // Add the class to trigger the transition
};


window.addEventListener("DOMContentLoaded", () => {
  const resumeDate = "10-23-25";
  const link = document.getElementById("resume-link");
  const thumbnail = document.querySelector(".resume-thumbnail");

  if (link) link.href = `./images/Tony-Carpenetti-Resume_${resumeDate}.pdf`;
  if (thumbnail) thumbnail.src = `./images/resume-thumbnail_${resumeDate}.jpg`;
});
