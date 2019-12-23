$(document).ready(function () {
  // your code
  var window = $(window);

  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
  });
  $(".humburger").click(function () {
    $(".navigation-wrapper").toggleClass("side-active");
    $(".humburger").toggleClass("humburger2");
  });
  $(".social-btn").click(function () {
    $(".social-wrapper > ul").toggleClass("visible");
  });
  $(".navigation-wrapper ul li ").click(function () {
    $(".navigation-wrapper").toggleClass("side-active");
    $(".humburger").toggleClass("humburger2");
  });
})


function AboutSec() {
  document.querySelector("#home").classList.add("deactive-section");
  document.querySelector("#service").classList.add("deactive-section");
  document.querySelector("#client").classList.add("deactive-section");
  document.querySelector("#contact").classList.add("deactive-section");
  document.querySelector("#about").classList.add("active-section");
  document.querySelector("#about").classList.remove("deactive-section");
}
function ServiceSec() {
  document.querySelector("#home").classList.add("deactive-section");
  document.querySelector("#about").classList.add("deactive-section");
  document.querySelector("#client").classList.add("deactive-section");
  document.querySelector("#contact").classList.add("deactive-section");
  document.querySelector("#service").classList.add("active-section");
  document.querySelector("#service").classList.remove("deactive-section");
}
function ClientSec() {
  document.querySelector("#home").classList.add("deactive-section");
  document.querySelector("#about").classList.add("deactive-section");
  document.querySelector("#service").classList.add("deactive-section");
  document.querySelector("#contact").classList.add("deactive-section");
  document.querySelector("#client").classList.add("active-section");
  document.querySelector("#client").classList.remove("deactive-section");
}
function ContactSec() {
  document.querySelector("#home").classList.add("deactive-section");
  document.querySelector("#about").classList.add("deactive-section");
  document.querySelector("#service").classList.add("deactive-section");
  document.querySelector("#client").classList.add("deactive-section");
  document.querySelector("#contact").classList.add("active-section");
  document.querySelector("#contact").classList.remove("deactive-section");
}
function HomeSec() {
  document.querySelector("#about").classList.add("deactive-section");
  document.querySelector("#service").classList.add("deactive-section");
  document.querySelector("#client").classList.add("deactive-section");
  document.querySelector("#contact").classList.add("deactive-section");
  document.querySelector("#home").classList.remove("deactive-section");
  document.querySelector("#home").classList.add("active-section");
}
