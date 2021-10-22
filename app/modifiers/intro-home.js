import { modifier } from 'ember-modifier';

export default modifier(function introHome(element /*, params, hash*/) {
  const height = window.innerHeight;
  const width = window.innerWidth;
  let intro_height = height - 70;

  element.setAttribute('style', 'height:' + intro_height + 'px'); // ~ 1.25em * 2 + 1em
  element.querySelector('button').addEventListener('click', () => {
    scroll(0, height);
  });

  if (width < 1110) {
    let image = element.querySelector('#image-home');
    let text_container = element.querySelector('.text-intro');
    text_container.insertBefore(image, text_container.childNodes[6]);
    if (width > 475) {
      element
        .querySelector('.text-intro #image-home')
        .setAttribute('style', 'height:' + height / 3 + 'px');
    }
  }

  // radar chart
  document
    .getElementById('skills')
    .setAttribute('style', 'height:' + height + 'px');
});
