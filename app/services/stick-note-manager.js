import Service from '@ember/service';
import { A } from '@ember/array';

export default class StickNoteManagerService extends Service {
  stickNotes = A([]);

  addStickNote(stickNote) {
    console.log(stickNote);
    this.stickNotes.pushObject(stickNote);
  }
}
