import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service('stick-note-manager') stickNoteManager;

  @action
  addNewStickNote() {
    this.stickNoteManager.addStickNote({
      title: 'New Stick Note',
      content: 'Write your content here',
    });
  }
}
