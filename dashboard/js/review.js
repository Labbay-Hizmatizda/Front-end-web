document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(function(star) {
      star.addEventListener('mouseover', function() {
        highlightStars(star.dataset.value);
      });
  
      star.addEventListener('mouseleave', function() {
        resetStars();
      });
  
      star.addEventListener('click', function() {
        resetStars();
        markClickedStars(star.dataset.value);
      });
    });
  
    function highlightStars(value) {
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('hover');
      }
    }
  
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove('hover');
      });
    }
  
    function markClickedStars(value) {
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('clicked');
      }
    }
  });
  