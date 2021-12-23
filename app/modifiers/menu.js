import { modifier } from 'ember-modifier';

export default modifier(function menu(header /*, params, hash*/) {
  //console.log('hello from header !');
  let tabs = header.querySelector('.layout-tabs');
  let hbg = header.querySelector('#button-hamburger button');
  let isOpen = false;
  hbg.addEventListener('click', () => {
    tabs.classList.toggle('menu-open');
    // hbg.classList.toggle('hamburger-on');
    isOpen = !isOpen;
    if (isOpen) {
      hbg.innerHTML = '0';
      //console.log('open !');
    } else {
      hbg.innerHTML = '=';
    }
  });
});
