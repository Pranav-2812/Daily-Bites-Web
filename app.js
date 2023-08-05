hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}
// document.addEventListener('DOMContentLoaded', function() {
//   const particles = document.querySelectorAll('.particle');
//   const animationDuration = 2; // Duration of the animation in seconds

//   function randomDelay() {
//     return Math.random() * animationDuration + 's'; // Random animation delay
//   }

//   function applyWaveAnimation(particle) {
//     const horizontalDistance = 100; // Distance to move horizontally in pixels
//     const waveHeight = 50; // Height of the wave in pixels

//     particle.style.animation = `waveAnimation ${animationDuration}s ease-in-out infinite`;
//     particle.style.animationDelay = randomDelay();
//     particle.style.animationDirection = Math.random() < 0.5 ? 'reverse' : 'normal';

//     // Add random horizontal position
//     particle.style.left = Math.random() * 100 + 'vw';

//     // Add random vertical position
//     particle.style.top = Math.random() * 100 + 'vh';
//   }

//   // Apply wave animation to each particle
//   particles.forEach(applyWaveAnimation);
// });




  


