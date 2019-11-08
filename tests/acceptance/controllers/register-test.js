import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click } from '@ember/test-helpers';

module('Acceptance | Controllers | register', function(hooks) {
  setupApplicationTest(hooks);
  test('Should render Register with strong value on password meter', async function(assert) {
    assert.expect(1);
    await visit('/');

    await fillIn('#password', 'Testing@234?:234');
    assert.equal(
      this.element.querySelectorAll('.strong').length,
      6,
      'There are 6 divs with strong class'
    );
  });
  test('Should render Register with medium value on password meter', async function(assert) {
    await visit('/');

    await fillIn('#password', 'Testing@234?:');
    assert.equal(
      this.element.querySelectorAll('.medium').length,
      4,
      'There are 4 divs with medium class'
    );
  });
  test('Should render Register with weak value on password meter', async function(assert) {
    assert.expect(1);
    await visit('/');

    await fillIn('#password', 'Testing');
    assert.equal(
      this.element.querySelectorAll('.weak').length,
      1,
      'There are 1 div with weak class'
    );
  });

  test('Should switch input from text to password when click to the eye button', async function(assert) {
    assert.expect(3);
    await visit('/');

    await fillIn('#password', 'Testing');

    assert.equal(
      this.element.querySelector('input').type,
      'password',
      'The input currently is password'
    );

    await click('.show-password');

    assert.equal(
      this.element.querySelector('input').type,
      'text',
      'The input currently is Text'
    );

    await click('.show-password');

    assert.equal(
      this.element.querySelector('input').type,
      'password',
      'The input currently is Text'
    );
  });
});
