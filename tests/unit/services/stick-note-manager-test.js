import { module, test } from 'qunit';
import { setupTest } from 'emberjs-stick-note/tests/helpers';

module('Unit | Service | stick-note-manager', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:stick-note-manager');
    assert.ok(service);
  });
});
