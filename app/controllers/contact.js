import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  textMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isBothTrue'),
  headerMessage: 'Contact Us!',
  isLongEnough: gte('textMessage.length', 5),
  isBothTrue: and('isLongEnough', 'isValid'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following text message and email address: ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }

});
