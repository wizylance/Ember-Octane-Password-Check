import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controllers | register', function(hooks) {
  setupTest(hooks);

  test('Should update disabledButton and passwordStrength on valChange action', function(assert) {
    assert.expect(8);

    // get the controller instance
    let controller = this.owner.lookup('controller:register/controller');


    // check the properties before the action is triggered
    assert.equal(controller.get('disabledButton'), true, 'disabledButton initialized');
    assert.equal(controller.get('passwordStrength'), '', 'passwordStrength initialized');

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    controller.send('setPasswordText', 'Testing Rocks!');
    controller.send('valChange');

    assert.equal(controller.get('disabledButton'), false, 'disabledButton updated');
    assert.equal(controller.get('passwordStrength'), 4, 'passwordStrength updated');

    controller.send('setPasswordText', 'Testing');
    controller.send('valChange');

    assert.equal(controller.get('disabledButton'), true, 'disabledButton not updated');
    assert.equal(controller.get('passwordStrength'), 0, 'passwordStrength updated');

    controller.send('setPasswordText', 'asdf2423');
    controller.send('valChange');

    assert.equal(controller.get('disabledButton'), false, 'disabledButton not updated');
    assert.equal(controller.get('passwordStrength'), 2, 'passwordStrength updated');

  });
  test('Should update showPassword on showPasswordClick action', function(assert) {
    assert.expect(4);
    // get the controller instance
    let controller = this.owner.lookup('controller:register/controller');


    // check the properties before the action is triggered
    assert.equal(controller.get('showPassword'), false, 'showPassword initialized');

    controller.send('showPasswordClick');

    assert.equal(controller.get('showPassword'), true, 'showPassword updated');

    controller.send('showPasswordClick');

    assert.equal(controller.get('showPassword'), false, 'showPassword updated');

    controller.send('showPasswordClick');

    assert.equal(controller.get('showPassword'), true, 'showPassword updated');
  })
});
