document.addEventListener('DOMContentLoaded', function() {
  var pages = document.querySelectorAll('.page');

  // Counter to keep track of completed page flip animations
  var completedAnimations = 1;

  // Function to display heart2 when all page flip animations are complete
  function showHeart2() {
    var heart2 = document.getElementById('heart2');
    var pageContent = document.getElementById('page-content');
    heart2.style.visibility = 'visible';
    pageContent.style.visibility = 'visible';
    heart2.style.animation = 'heartPopup2 0.3s ease infinite';
    // pageContent.style.animation = 'textDisplay 1s ease infinite';
  }

  // Function to handle animation end event
  function onAnimationEnd() {
    completedAnimations++;
    // If all page flip animations are complete, show heart2
    if (completedAnimations === (pages.length)) {
      showHeart2();
    }
  }

  // Attach animation end event listener to each page
  pages.forEach(function(page) {
    page.addEventListener('animationend', onAnimationEnd);
    console.log('hello 2')
  });
});
