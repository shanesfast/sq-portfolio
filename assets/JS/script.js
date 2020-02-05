/* MODAL IMAGE VIEWER */

$(document).ready(function() {
  $(".top-ten").click(function(e) {
    const setImg = document.getElementById("setImg");
    const subTitle = document.getElementById("subtitle");

    $(".modal, .closeModal").fadeIn(300);
    $(".modal").focus();
    setImg.src = $(e.target).attr("src");
    subTitle.innerHTML = $(e.target).attr("alt");
    e.preventDefault();
  })

  $(".close").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

  $(".closeModal, .modal").click(function(e) {
    $(".modal, .closeModal").fadeOut(300);
    e.preventDefault();
  })

});
