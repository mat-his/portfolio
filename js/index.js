var imageContainer;

function init() {
  console.log("this is init function");

  imageContainer = document.querySelector('.image-container');

  var menu = document.getElementById("menu-hiding");

  window.addEventListener('scroll', function(e) {
    if (window.scrollY > 900) {
      menu.style.visibility = "visible";
    } else {
      menu.style.visibility = "hidden";
    }
  });
}

var bool = false;

function menu() {
  var menu_drawer = document.querySelector(".layout-tabs");
  if (!bool) {
    menu_drawer.style.visibility = "visible";
    bool = true;
  } else {
    menu_drawer.style.visibility = "hidden";
    bool = false;
  }
}

function scrollToFields() {
  /*window.scroll({
      top: 1024,
      behavior: 'smooth'
    });*/
 document.getElementById('fields-adjust').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContent() {
  document.getElementById('fields-adjust').scrollIntoView({ behavior: 'smooth' });
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
