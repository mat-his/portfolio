import Component from '@glimmer/component';
import { action, tracked } from '@ember/object';

export default class ProjectWrapperComponent extends Component {
  @action
  async onEnter() {
    const list = document.querySelector(
      '#list-' + this.args.title + ' .p-wrapper'
    );
    // list.querySelector('.p-wrapper')
    console.log(this.list);
    let children = Array.from(list.children);
    sleep(175).then(() => {
      var k = 1;
      children.forEach(function (node, index) {
        console.log(node + ', ' + index + ', ' + this);
        // new Promise((resolve) => setTimeout(resolve, 1000));
        sleep(k * 175).then(() => {
          console.log('after sleeping');
          node.classList.remove('smooth-entrance');
        });
        k++;
      });
    });
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
