import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // load bio api
    const response = await fetch('/api/bio.json');
    console.log('got response');
    let dataBio = {};
    if (response.ok) {
      dataBio = response.json();
      console.log('ok !');
    }
    // return models
    return RSVP.hash({
      intro: this.store.findRecord('intro', 'intro-home'),
      bio: dataBio,
      chart: this.store.findAll('project'),
      android: this.store.findAll('project').then((results) =>
        results.filter((site) => {
          return site.get('category').indexOf('android') !== -1;
        })
      ),
      frontEnd: this.store.findAll('project').then((results) =>
        results.filter((site) => {
          return site.get('category').indexOf('front-end') !== -1;
        })
      ),
      backEnd: this.store.findAll('project').then((results) =>
        results.filter((site) => {
          return site.get('category').indexOf('back-end') !== -1;
        })
      ),
      software: this.store.findAll('project').then((results) =>
        results.filter((site) => {
          return site.get('category').indexOf('software') !== -1;
        })
      ),
      other: this.store.findAll('other'),
    });
  }
}
