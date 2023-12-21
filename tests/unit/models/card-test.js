import { module, test } from 'qunit';

import { setupTest } from 'emberjs-awesome-3d-page/tests/helpers';

module('Unit | Model | card', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('card', {});
    assert.ok(model);
  });
});
