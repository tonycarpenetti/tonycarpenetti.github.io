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






 

/* automation.js — Memory Jogger
   Matches the following HTML IDs/classes:
   .letter[data-letter], #letter-display, #remember-btn,
   #pause-btn, #continue-btn, #stop-btn, #prev-btn, #next-btn, #speed-slider
*/

(() => {
  // ----- element refs (must match your HTML) -----
  const letterEls = Array.from(document.querySelectorAll('.letter'));
  const display = document.getElementById('letter-display');
  const rememberBtn = document.getElementById('remember-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const continueBtn = document.getElementById('continue-btn');
  const stopBtn = document.getElementById('stop-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const speedSlider = document.getElementById('speed-slider');
  const letterNums = document.getElementById('letter-nums');

  // safety check
  if (!display || !rememberBtn || !pauseBtn || !continueBtn || !stopBtn || !prevBtn || !nextBtn || !speedSlider) {
    console.error('automation.js: required elements not found. Check IDs/classes.');
    return;
  }

  // ----- constants & state -----
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sequences = [];        // current sequence array (strings)
  let currentIndex = 0;      // index into sequences
  let timerId = null;        // id from setTimeout
  let isRunning = false;     // true while auto cycling is active
  let isPaused = false;      // true when paused (sequence loaded but not running)

  // ----- utility functions -----
  function generateSequences(startLetter = '') {
    const seq = [];
    if (startLetter) {
      seq.push(startLetter);
      for (const s of ALPHABET) seq.push(startLetter + s);
    } else {
      for (const a of ALPHABET) {
        seq.push(a);
        for (const b of ALPHABET) seq.push(a + b);
      }
    }
    return seq;
  }

  // slider -> delay in ms (right = faster)
  function getDelayMs() {
    const min = Number(speedSlider.min || 100);
    const max = Number(speedSlider.max || 2000);
    const val = Number(speedSlider.value);
    // map val from [min,max] to [SLOW,FAST] where val=max => FAST
    const SLOW = 1500;
    const FAST = 100;
    const pct = (val - min) / (max - min || 1);
    return Math.round(SLOW + (FAST - SLOW) * pct);
  }

  function clearTimer() {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function showText(t) {
    // keep size via CSS — only change content
    display.textContent = t || '';
    highlightLetter(t ? t[0] : null);
  }

  function highlightLetter(letterChar) {
    if (!letterEls.length) return;
    letterEls.forEach(el => el.classList.remove('active'));
    if (!letterChar) return;
    const target = letterEls.find(el => {
      const d = (el.dataset.letter || el.textContent || '').trim().toUpperCase();
      return d === letterChar.toUpperCase();
    });
    if (target) target.classList.add('active');
  }

  function updateRememberButton() {
    // Remember only active when fully stopped (no loaded sequence)
    const stopped = !isRunning && !isPaused && (sequences.length === 0);
    rememberBtn.disabled = !stopped;
    if (stopped) {
      rememberBtn.classList.remove('disabled');
    } else {
      rememberBtn.classList.add('disabled');
    }
  }

  function updatePauseContinueButtons() {
    // Show PAUSE while running; otherwise show CONTINUE.
    if (isRunning) {
      pauseBtn.style.display = 'inline-flex';
      continueBtn.style.display = 'none';
    } else {
      pauseBtn.style.display = 'none';
      continueBtn.style.display = 'inline-flex';
    }
  }

  // start automated ticking from currentIndex
  function scheduleNextTick() {
    clearTimer();
    const delay = getDelayMs();

    // schedule the next advance after `delay` ms
    timerId = setTimeout(() => {
      currentIndex++;
      if (currentIndex >= sequences.length) {
        // completed
        clearTimer();
        isRunning = false;
        isPaused = false;
        showText('');           // turn display off when finished
        sequences = [];
        currentIndex = 0;
        updatePauseContinueButtons();
        updateRememberButton();
        return;
      }
      showText(sequences[currentIndex]);
      // continue scheduling
      scheduleNextTick();
    }, delay);
  }

  // start sequence with sequences[] already loaded; begin at index (default 0)
  function startAutoFrom(indexToStart = 0) {
    if (isRunning) return; // no-op if already running
    if (!sequences || sequences.length === 0) return; // nothing to run

    currentIndex = Math.max(0, Math.min(indexToStart, sequences.length - 1));
    isRunning = true;
    isPaused = false;
    showText(sequences[currentIndex]); // show immediately
    updatePauseContinueButtons();
    updateRememberButton();
    scheduleNextTick();
  }

  function pauseAuto() {
    if (!isRunning) return;
    clearTimer();
    isRunning = false;
    isPaused = true;
    updatePauseContinueButtons();
    updateRememberButton();
  }

  function stopAll() {
    clearTimer();
    isRunning = false;
    isPaused = false;
    sequences = [];
    currentIndex = 0;
    showText('');
    updatePauseContinueButtons();
    updateRememberButton();
  }

  // manual navigation: pause if running, then step
  function manualPrev() {
    if (!sequences || sequences.length === 0) return;
    if (isRunning) pauseAuto();
    // step back
    currentIndex = Math.max(0, currentIndex - 1);
    showText(sequences[currentIndex]);
  }

  function manualNext() {
    if (!sequences || sequences.length === 0) return;
    if (isRunning) pauseAuto();
    // step forward
    currentIndex = Math.min(sequences.length - 1, currentIndex + 1);
    showText(sequences[currentIndex]);
  }

  // ----- wire up events -----

  // clickable letters: start that letter sequence (user intent)
  letterEls.forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      // load sequence for this letter and immediately start it
      const letter = (el.dataset.letter || el.textContent || '').trim().toUpperCase().slice(0, 1);
      if (!letter) return;
      stopAll(); // ensure cleaned state; clicking letter restarts
      sequences = generateSequences(letter);
      startAutoFrom(0);
    });
  });

  // REMEMBER button: only works when stopped (updateRememberButton enforces disabled)
  rememberBtn.addEventListener('click', () => {
    if (rememberBtn.disabled) return;
    // load full A->ZZ and start
    sequences = generateSequences('');
    startAutoFrom(0);
  });

  // PAUSE (visible while running)
  pauseBtn.addEventListener('click', () => {
    if (isRunning) pauseAuto();
  });

  // CONTINUE (visible while paused/stopped) -> resumes if sequence loaded
  continueBtn.addEventListener('click', () => {
    if (isRunning) return;
    if (!sequences || sequences.length === 0) return;
    // if currentIndex already at end, do nothing
    if (currentIndex >= sequences.length) return;
    isPaused = false;
    isRunning = true;
    updatePauseContinueButtons();
    updateRememberButton();
    scheduleNextTick();
  });

  // STOP
  stopBtn.addEventListener('click', () => {
    stopAll();
  });

  // PREV / NEXT: pause and step exactly one
  prevBtn.addEventListener('click', (e) => {
    manualPrev();
  });
  nextBtn.addEventListener('click', (e) => {
    manualNext();
  });

  // Slider: update speed live WITHOUT pausing. If running, reschedule the next tick with new delay.
  speedSlider.addEventListener('input', () => {
    if (isRunning) {
      // Reschedule next tick at new speed; do not change currentIndex or display
      clearTimer();
      scheduleNextTick();
    }
  });

  // Keyboard arrows: mirror button behavior, pause then step once
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      manualPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      manualNext();
    }
  });

  // Ensure pointer cursor for controls (defensive in case CSS differs)
  [rememberBtn, pauseBtn, continueBtn, stopBtn, prevBtn, nextBtn].forEach(b => {
    if (b) b.style.cursor = 'pointer';
  });

  // initial UI state
  sequences = [];
  currentIndex = 0;
  isRunning = false;
  isPaused = false;
  clearTimer();
  showText('');
  updatePauseContinueButtons();
  updateRememberButton();

  // expose for debugging if needed
  window._automationMemoryJogger = {
    startAutoFrom, pauseAuto, stopAll, manualPrev, manualNext, generateSequences, state: () => ({isRunning, isPaused, currentIndex, sequencesLength: sequences.length})
  };
})();

