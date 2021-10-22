import Model, { attr } from '@ember-data/model';

export default class IntroModel extends Model {
  @attr title;
  @attr subtitle;
  @attr description;
  @attr image;
}
