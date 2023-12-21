import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-awesome-3d-page/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stick-note-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StickNoteCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <StickNoteCard>
        template block text
      </StickNoteCard>
    `);

    assert.dom().hasText('template block text');
  });
});
