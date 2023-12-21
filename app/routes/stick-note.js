import Route from '@ember/routing/route';

export default class StickNoteRoute extends Route {
  model(params) {
    return this.store.findRecord('stick-note', params.stick_note_id);
  }
}
