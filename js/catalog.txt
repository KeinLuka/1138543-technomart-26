window.addEventListener('load', function(){
    var Cpopap = document.querySelector('.popap-catalog');
    var button = document.querySelectorAll(".poopup_grn");
    var close = Cpopap.querySelector(".popap__close");
    var i = 0;

    button.forEach(function(btn, i) {
        btn.addEventListener("mouseover", function(e){
            e.preventDefault();
            button[i].addEventListener('click', function(e){
                e.preventDefault();
                Cpopap.classList.add('modal-show');
            });     
        })
    });
    
    close.addEventListener('click', function(e) {
        e.preventDefault();
        Cpopap.classList.remove('modal-show');
      });
});

window.addEventListener('keydown', function(e){
    var Cpopap = document.querySelector('.popap-catalog');
    if (e.keyCode === 27) {
      if (Cpopap.classList.contains("modal-show")) {
        e.preventDefault();
        Cpopap.classList.remove('modal-show');
        } 
      }
    });