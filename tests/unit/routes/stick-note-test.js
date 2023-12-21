import { module, test } from 'qunit';
import { setupTest } from 'emberjs-awesome-3d-page/tests/helpers';

module('Unit | Route | stick-note', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:stick-note');
    assert.ok(route);
  });
});
