/*import "./style.css";
const video = document.getElementById("videoElement");
const playPauseBtn = document.getElementById("playPauseBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const volumeSlider = document.getElementById("volumeSlider");

const isMobileDevice = "ontouchstart" in window;

// Play/Pause functionality
const togglePlayPause = () => {
  console.log("Play/Pause button clicked");
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
};

// Fullscreen functionality
const toggleFullscreen = () => {
  console.log("Fullscreen button clicked");
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
};

// Event handling for mobile and desktop
if (isMobileDevice) {
  // Handle touch events on mobile devices
  playPauseBtn.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault(); // Prevent default action
      e.stopPropagation(); // Stop event propagation
      togglePlayPause();
    },
    { passive: true }
  );

  fullscreenBtn.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFullscreen();
    },
    { passive: true }
  );
} else {
  // Handle click events for non-mobile devices
  playPauseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    togglePlayPause();
  });

  fullscreenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFullscreen();
  });
}

// Volume control
volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
});*/
