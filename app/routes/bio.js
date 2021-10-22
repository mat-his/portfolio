import Route from '@ember/routing/route';

export default class BioRoute extends Route {
  async model() {
    let response = await fetch(`/api/bio.json`);
    let { data } = await response.json();
    return data;
  }
}
