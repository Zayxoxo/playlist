// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    
    duration: 1000,
    once: true, 
  });
});

// Script for toggling the navbar menu on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const songCards = document.querySelectorAll(".song-card");

songCards.forEach((card) => {
  const audio = card.querySelector("audio");

  // Play audio on hover
  card.addEventListener("mouseenter", () => {
    document.querySelectorAll("audio").forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0; 
      }
    });

    audio.currentTime = 0; 
    audio.play();
  });

  // Pause audio when hover ends
  card.addEventListener("mouseleave", () => {
    audio.pause();
  });
});

// Toggle play/pause on double-click
card.addEventListener("dblclick", () => {
  
  document.querySelectorAll("audio").forEach((otherAudio) => {
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }
  });


  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

