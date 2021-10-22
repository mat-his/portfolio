import Model, { attr } from '@ember-data/model';

export default class LegalModel extends Model {
  @attr category;
  @attr title;
  @attr content;
}
