import Model, { attr } from '@ember-data/model';

export default class StickNoteModel extends Model {
  @attr('string') title;
  @attr('string') content;
}
