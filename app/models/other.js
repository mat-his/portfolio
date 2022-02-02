import Model, { attr } from '@ember-data/model';

export default class OtherModel extends Model {
  @attr title;
  @attr category;
  @attr thumbnail;
  @attr description;
  @attr color;
  @attr skills;
  @attr link;
}
