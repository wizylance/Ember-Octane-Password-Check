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
  });
  test('Should render Strong for Status Text', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=2 />`);
    assert.equal(
      this.element
        .querySelector('#status-text-strength-meter')
        .textContent.trim(),
      'Medium',
      'initial text is Medium'
    );
  });
  test('Should render Strong for Status Text', async function(assert) {
    await render(hbs`<StrengthMeter @passwordStrength=0 />`);
    assert.equal(
      this.element
        .querySelector('#status-text-strength-meter')
        .textContent.trim(),
      'Weak',
      'initial text is Weak'
    );
  });
});
