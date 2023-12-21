import Component from '@glimmer/component';

export default class StickNoteDetailsComponent extends Component {
  get stickNote() {
    return this.args.stickNote;
  }
}
