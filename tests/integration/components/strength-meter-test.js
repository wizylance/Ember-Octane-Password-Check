import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Components | strength-meter', function(hooks) {
  setupRenderingTest(hooks);
  test('Should render StrengthMeter', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=4 />`);
    assert.ok(this.element.querySelector('div'));
  });
  test('Should render Strong for Status Text', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=4 />`);
    assert.equal(
      this.element
        .querySelector('#status-text-strength-meter')
        .textContent.trim(),
      'Strong',
      'initial text is Strong'
    );
    assert.equal(this.element.querySelectorAll('.strong').length, 6, 'There are 6 divs with strong class');
  });
  test('Should render Medium for Status Text', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=2 />`);
    assert.equal(
      this.element
        .querySelector('#status-text-strength-meter')
        .textContent.trim(),
      'Medium',
      'initial text is Medium'
    );
    assert.equal(this.element.querySelectorAll('.medium').length, 4, 'There are 4 divs with medium class');
  });
  test('Should render Weak for Status Text', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=0 />`);
    assert.equal(
      this.element
        .querySelector('#status-text-strength-meter')
        .textContent.trim(),
      'Weak',
      'initial text is Weak'
    );
    assert.equal(this.element.querySelectorAll('.weak').length, 1, 'There are 4 divs with weak class');
  });
});
