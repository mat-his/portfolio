import EmberRouter from '@ember/routing/router';
import config from 'portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('test-about');
  this.route('bio');
  this.route('project', { path: '/project/:project_id' });
  this.route('legal-notice');
});
