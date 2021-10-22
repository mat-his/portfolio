import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | intro model', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists, record exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('intro', {
      type: 'intro',
      id: 'intro-home',
      title: 'Mathis Lecomte',
      subtitle: 'Portfolio',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      image: '/assets/images/dev_laptop_carnet.png',
    });
    assert.ok('record ok');
    assert.equal(rental.title, 'Mathis Lecomte');
  });
});
