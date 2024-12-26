document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  const hiddenMessage = document.getElementById('hiddenMessage');
  const snowCanvas = document.getElementById('snowCanvas');
  const scratchCardCanvas = document.getElementById('scratchCardCanvas');
  const ctx = scratchCardCanvas.getContext('2d');
  const snowCtx = snowCanvas.getContext('2d');
  let isDrawing = false;

  // Show splash screen for 2-5 seconds
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 2500); // 2.5 seconds delay before showing main content

  // Snow animation
  snowCanvas.width = window.innerWidth;
  snowCanvas.height = window.innerHeight;
  const snowflakes = Array.from({ length: 100 }, () => ({
    x: Math.random() * snowCanvas.width,
    y: Math.random() * snowCanvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 5 + 1,
  }));

  function drawSnow() {
    snowCtx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
    snowflakes.forEach((flake) => {
      snowCtx.beginPath();
      snowCtx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
      snowCtx.fillStyle = 'white';
      snowCtx.fill();
    });
  }

  function updateSnow() {
    snowflakes.forEach((flake) => {
      flake.y += flake.d;
      if (flake.y > snowCanvas.height) {
        flake.y = -flake.r;
        flake.x = Math.random() * snowCanvas.width;
      }
    });
  }

  function animateSnow() {
    drawSnow();
    updateSnow();
    requestAnimationFrame(animateSnow);
  }

  animateSnow();

  // Scratch card functionality
  ctx.fillStyle = 'silver';
  ctx.fillRect(0, 0, scratchCardCanvas.width, scratchCardCanvas.height);
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Scratch here!', scratchCardCanvas.width / 2, scratchCardCanvas.height / 2);

  const scratch = (e) => {
    if (!isDrawing) return;
    const rect = scratchCardCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left || e.touches[0]?.clientX - rect.left;
    const y = e.clientY - rect.top || e.touches[0]?.clientY - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkScratchCompletion = () => {
    const pixels = ctx.getImageData(0, 0, scratchCardCanvas.width, scratchCardCanvas.height).data;
    let scratched = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) scratched++;
    }

    const scratchedPercent = (scratched / (scratchCardCanvas.width * scratchCardCanvas.height)) * 100;

    if (scratchedPercent > 50) {
      scratchCardCanvas.style.display = 'none';
      hiddenMessage.style.display = 'block';
    }
  };

  const startDrawing = () => (isDrawing = true);
  const stopDrawing = () => {
    isDrawing = false;
    checkScratchCompletion();
  };

  scratchCardCanvas.addEventListener('mousedown', startDrawing);
  scratchCardCanvas.addEventListener('mouseup', stopDrawing);
  scratchCardCanvas.addEventListener('mousemove', scratch);
  scratchCardCanvas.addEventListener('touchstart', startDrawing);
  scratchCardCanvas.addEventListener('touchend', stopDrawing);
  scratchCardCanvas.addEventListener('touchmove', scratch);
});
