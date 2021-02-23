var imageContainer;

function init() {
  console.log("this is init funciton");

  imageContainer = document.querySelector('.image-container');
}

var i = 0;

function menu() {
  var menu_drawer = document.querySelector(".layout-tabs");
  if (i%2==0) {
    menu_drawer.style.display = "inline";
    i++;
  } else {
    menu_drawer.style.display = "none";
    i++;
  }
}

function scrollToFields() {
  window.scroll({
      top: 1048,
      behavior: 'smooth'
    });
// document.getElementById('layout-fields').scrollIntoView({ behavior: 'smooth' });
}

function slide1() {
  imageContainer.style.left = "0%";
}

function slide2() {
  imageContainer.style.left = "-100%";
}

function slide3() {
  imageContainer.style.left = "-200%";
}
