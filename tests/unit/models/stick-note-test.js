import { module, test } from 'qunit';

import { setupTest } from 'emberjs-stick-note/tests/helpers';

module('Unit | Model | stick note', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('stick-note', {});
    assert.ok(model);
  });
});
