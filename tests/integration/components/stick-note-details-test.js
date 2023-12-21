import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-stick-note/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stick-note-details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StickNoteDetails />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <StickNoteDetails>
        template block text
      </StickNoteDetails>
    `);

    assert.dom().hasText('template block text');
  });
});
