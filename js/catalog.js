window.addEventListener("load", function() {
  var catalogPopap = document.querySelector(".popap-catalog");
  var openBtn = document.querySelectorAll(".poopup_grn");
  var closeBtn = catalogPopap.querySelector(".popap__close");

  var closePopap = function(el) {
    el.classList.remove("modal-show");
  };

  var openPopap = function(el) {
    el.classList.add("modal-show");
  };

  openBtn.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      openPopap(catalogPopap);
    });
  });

  closeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    closePopap(catalogPopap);
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && catalogPopap.classList.contains("modal-show")) {
      evt.preventDefault();
      closePopap(catalogPopap);
    }
  });
});
