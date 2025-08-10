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
