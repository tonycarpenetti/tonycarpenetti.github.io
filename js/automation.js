// automation.js 
// console.log('automation.js is loaded');

window.onload = function() {
    document.body.classList.add('fly-in');  // Add the class to trigger the transition
};

const resumeDate = "10-23-25"; // update this once
document.getElementById("resume-link").href = `./images/Tony-Carpenetti-Resume_${resumeDate}.pdf`;
document.querySelector(".resume-thumbnail").src = `./images/resume-thumbnail_${resumeDate}.png`;

