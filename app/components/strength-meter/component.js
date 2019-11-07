import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StrengthMeter extends Component {
  @tracked statusText = '';
  @tracked strongMeters = [];

  constructor() {
    super(...arguments);
  }

  get statusTextResult() {
    const passwordStrengthScore = this.args.passwordStrength;
    if (passwordStrengthScore === '') {
      return this.statusText;
    }
    if (passwordStrengthScore <= 1) {
      this.statusText = 'Weak';
    }
    if (passwordStrengthScore > 1 && passwordStrengthScore <= 3) {
      this.statusText = 'Medium';
    }
    if (passwordStrengthScore > 3) {
      this.statusText = 'Strong';
    }
    return this.statusText;
  }

  get strongMeterResult() {
    const passwordStrengthScore = this.args.passwordStrength;
    if (passwordStrengthScore === '') {
      return this.strongMeters;
    }
    if (passwordStrengthScore <= 1) {
      this.strongMeters = ['weak', 'default', 'default', 'default', 'default', 'default'];
    }
    if (passwordStrengthScore > 1 && passwordStrengthScore <= 3) {
      this.strongMeters = ['medium', 'medium', 'medium', 'medium', 'default', 'default'];
    }
    if (passwordStrengthScore > 3) {
      this.strongMeters = ['strong', 'strong', 'strong', 'strong', 'strong', 'strong'];
    }
    return this.strongMeters;
  }
}
