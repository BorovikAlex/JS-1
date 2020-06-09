const firstButoon = document.getElementById("first-button"),
  secondButton = document.getElementById("second-button"),
  thirdButton = document.getElementById("third-button");

firstButoon.onclick = function () {
  window.location.href = "https://borovikalex.github.io/MoGo/";
};

secondButton.onclick = function () {
  document.querySelector(".wrapper").style.backgroundColor = "green";
};

thirdButton.onclick = function () {
  (document.querySelector(".wrapper").style.display = "none"),
    (document.querySelector(".wrapper2").style.display = "block");
};
