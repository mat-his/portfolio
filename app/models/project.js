import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr title;
  @attr category;
  @attr thumbnail;
  @attr description;
  @attr color;
  @attr skills;
  @attr link;
}
