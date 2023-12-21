import Route from '@ember/routing/route';

export default class StickNoteRoute extends Route {
  model(params) {
    // Assume que você tem um serviço de dados ou Ember Data configurado
    return this.store.findRecord('stick-note', params.stick_note_id);
  }
}
