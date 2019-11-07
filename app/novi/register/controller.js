import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import zxcvbn from 'zxcvbn';

export default class Register extends Controller {
  @tracked passwordStrength = '';
  @tracked disabledButton = true;
  @tracked showPassword = false;

  @action
  valChange() {
    const currentPassword = this.get('passwordText');
    const { score: strengthScore } = zxcvbn(currentPassword);
    if (strengthScore >= 2) {
      this.disabledButton = false;
    } else {
      this.disabledButton = true;
    }
    this.passwordStrength = strengthScore;
  }

  @action
  showPasswordClick() {
    this.showPassword = !this.showPassword;
  }

}
