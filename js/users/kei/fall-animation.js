document.addEventListener('DOMContentLoaded', () => {
  
  function createFallingBall() {
    const ball = document.createElement('img');
    ball.src = '../../../assets/images/details_images/ball.png';
    ball.classList.add('falling-ball');
    
    // Randomize horizontal starting position for variety
    const startLeft = Math.random() * 90; // 0 to 90% of the viewport width
    ball.style.left = `${startLeft}vw`;

    document.body.appendChild(ball);

    // Remove the ball from the DOM after the animation finishes
    ball.addEventListener('animationend', () => {
      ball.remove();
    });
  }

  // Initial ball on page load
  createFallingBall();

  // Add a new ball on every tap
  document.body.addEventListener('click', createFallingBall);
});