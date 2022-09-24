import { module, test } from 'qunit';
import { setupTest } from 'booklist/tests/helpers';

module('Unit | Route | books', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:books');
    assert.ok(route);
  });
});
