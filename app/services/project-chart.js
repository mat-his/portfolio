import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

class Project {
  @tracked projects;

  constructor(pjt) {
    this.projects = pjt;
  }
}

export default class ProjectChartService extends Service {
  @tracked projects = [];

  @action
  change(pjt) {
    let new_pjt = new Project(pjt);
    if (Array.isArray(new_pjt)) {
      this.projects = new_pjt;
    } else {
      this.projects = [new_pjt];
    }
  }
}
