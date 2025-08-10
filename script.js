const introVideo = document.getElementById('intro-video');
  const introContainer = document.getElementById('intro-container');
  const mainContent = document.getElementById('main-content');

  introVideo.play().catch(() => {
    // Autoplay might be blocked until user interaction
  });

  introVideo.addEventListener('ended', () => {
    // Hide intro container and show main content when video ends
    introContainer.style.display = 'none';
    mainContent.style.display = 'block';
  });
  // After intro video ends
document.getElementById('intro-container').style.display = 'home'

// Enable scrolling again:
document.body.style.overflow = 'auto';
document.documentElement.style.overflow = 'auto';
function showEventSummary(text) {
  const summaryDiv = document.getElementById('event-summary');
  summaryDiv.textContent = text;
}
function showEventSummary(text) {
  const summaryDiv = document.getElementById('event-summary');
  summaryDiv.style.opacity = 0;
  summaryDiv.style.display = 'block';
  summaryDiv.textContent = text;

  setTimeout(() => {
    summaryDiv.style.opacity = 1;
  }, 10);
}
