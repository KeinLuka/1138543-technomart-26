window.addEventListener("load", function () {
  var slider = document.querySelector(".slider");
  var btnPrev = slider.querySelector(".slider__btn--prev");
  var btnNext = slider.querySelector(".slider__btn--next");
  var slide = slider.querySelectorAll(".slide");
  var i = 0;

  btnNext.addEventListener("click", function (e) {
    e.preventDefault();
    slide[i].classList.remove("js-display");
    i++;
    if (i > slide.length - 1) {
      i = 0;
    }
    slide[i].classList.add("js-display");
  });

  btnPrev.addEventListener("click", function (e) {
    e.preventDefault();
    slide[i].classList.remove("js-display");
    i--;
    if (i < 0) {
      i = slide.length - 1;
    }
    slide[i].classList.add("js-display");
  });

  var sliders = document.querySelector(".bottom-slider");
  var button = sliders.querySelectorAll(".control-btn__button");
  var slide1 = sliders.querySelectorAll(".bottom-slider__slide");
  button.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      button.forEach(function (btn) {
        btn.classList.remove("control__btn--active");
      });
      btn.classList.add("control__btn--active");
      slide1.forEach(function (sl) {
        sl.classList.remove("js-display");
      });
      slide1[i].classList.add("js-display");
    });
  });

  var formPopap = document.querySelector(".container-form");
  var form = formPopap.querySelector("form");
  var formInputs = formPopap.querySelectorAll("input");
  var openForm = document.querySelector(".about-company__link-contact");
  var formFocusInput = formPopap.querySelector(".name-iput");
  var formEmail = formPopap.querySelector(".name-email");
  var closeForm = formPopap.querySelector(".popap__close");
  var submissionForm = formPopap.querySelector(".background-button__btn");

  var mapPopap = document.querySelector(".popap-map");
  var openMap = document.querySelector(".about-company__map");
  var closeMap = mapPopap.querySelector(".popap__close");

  var closePopap = function (el) {
    el.classList.remove("js-display");
    el.classList.remove("modal-show");
    form.reset();
    formInputs.forEach(function (inp) {
      inp.style = null;
    });
  };

  var openPopap = function (el) {
    el.classList.add("js-display");
    el.classList.add("modal-show");
  };

  openForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopap(formPopap);
    formFocusInput.focus();
  });

  closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopap(formPopap);
  });

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopap(mapPopap);
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopap(mapPopap);
  });

  window.addEventListener("keydown", function (evt) {
    if (
      (evt.keyCode === 27 && formPopap.classList.contains("modal-show")) ||
      mapPopap.classList.contains("modal-show")
    ) {
      evt.preventDefault();
      closePopap(formPopap);
      closePopap(mapPopap);
    }
  });

  var removeError = function () {
    formPopap.classList.remove("modal-error");
    formPopap.classList.remove("modal-show");
  };

  var showError = function (el) {
    el.style.border = "2px solid red";
    formPopap.classList.add("modal-error");
    setTimeout(removeError, 1000);
  };

  formInputs.forEach(function (inp) {
    inp.addEventListener("input", function () {
      inp.style = null;
    });
  });

  submissionForm.addEventListener("click", function (evt) {
    formInputs.forEach(function (inp) {
      if (!inp.validity.valid) {
        showError(inp);
        evt.preventDefault();
      }
    });
  });
});
