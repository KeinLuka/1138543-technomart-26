window.addEventListener('load', function() {
    var slider = document.querySelector('.slider');
    var btnPrev = slider.querySelector('.slider__btn--prev');
    var btnNext = slider.querySelector('.slider__btn--next');
    var slide = slider.querySelectorAll('.slide');
    var i = 0;

    btnNext.addEventListener('click', function(e) {
      e.preventDefault();
      slide[i].classList.remove('js-display');
      i++;
      if(i > slide.length - 1) {
        i = 0;
      }
      slide[i].classList.add('js-display');
    });

    btnPrev.addEventListener('click', function(e) {
      e.preventDefault();
      slide[i].classList.remove('js-display');
      i--;
      if(i < 0) {
        i = slide.length - 1;
      }
      slide[i].classList.add('js-display');
    });


  var sliders = document.querySelector(".bottom-slider");
  var button = sliders.querySelectorAll(".bottom-slide__button");
  var slide1 = sliders.querySelectorAll(".slider__item");
  button.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
      button.forEach(function(btn) {
        btn.classList.remove("control__btn--active");
      });
      btn.classList.add("control__btn--active");
      slide1.forEach(function(sl) {
        sl.classList.remove("js-display");
      });
      slide1[i].classList.add("js-display");
    });
  });
});