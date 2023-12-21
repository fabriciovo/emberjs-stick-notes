import Model, { attr } from '@ember-data/model';

export default class CardModel extends Model {
  @attr('string') title;
  @attr('string') content;
}
