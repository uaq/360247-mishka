var link = document.querySelector(".order-btn");

var popup = document.querySelector(".modal-order");
var close = popup.querySelector(".modal-order__form-close");
//var radio = popup.querySelector("");
var form = popup.querySelector(".modal-order__form");
var overlay = document.querySelector(".modal-order__overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-order__show");
  overlay.classList.add("modal-order__show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-order__show");
  overlay.classList.remove("modal-order__show");
});

//form.addEventListener("submit", function(event) {
//    if (!nameinput.value || !emailinput.value || !letterarea.value) {
//        event.preventDefault();
//        popup.classList.remove("modal-form-error");
//        popup.offsetWidth = popup.offsetWidth;
//        popup.classList.add("modal-form-error");
//    } else {
//        localStorage.setItem("nameinput", nameinput.value);
//        localStorage.setItem("emailinput", emailinput.value);
//    }
//});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-order__show")) {
      popup.classList.remove("modal-order__show");
      overlay.classList.remove("modal-order__show");
    }
  }
});
