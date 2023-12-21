import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service('stick-note-manager') stickNoteManager;

  @action
  addNewStickNote() {
    const newStickNote = {
      title: 'New Stick Note',
      content: 'Write your content here',
    };
    this.stickNoteManager.addStickNote(newStickNote);
  }

  get model() {
    console.log('adojasdoakpk');
    return this.stickNoteManager.stickNotes;
  }
}
