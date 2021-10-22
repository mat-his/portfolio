import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class RadarChartComponent extends Component {
  // @service('project-chart') projects;
  @tracked projects = this.args.projects;
  i = 0;
  get result() {
    return this.projects;
  }
  @action
  increment() {
    this.i++;
  }
  selectProject(e) {
    //let that = this;
    //console.log(this);
    //e.preventDefault();
    let pjt_title = e.target.value;
    let i = e.target.classList[0];
    i = i.replace('p-', '');
    i = parseInt(i);
    let index = this.args.projects.indexOf(pjt_title);
    super.projects = super.args.projects[i];
  }
}
