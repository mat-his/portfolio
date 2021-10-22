import Route from '@ember/routing/route';

export default class LegalNoticeRoute extends Route {
  async model(params) {
    return this.store.findRecord('legal', 'legal-notice');
  }
}
