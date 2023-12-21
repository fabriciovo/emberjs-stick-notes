import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-awesome-3d-page/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stick-note-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StickNoteList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <StickNoteList>
        template block text
      </StickNoteList>
    `);

    assert.dom().hasText('template block text');
  });
});
