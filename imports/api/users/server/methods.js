import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base';

export const registerUser = new ValidatedMethod({
  name: 'registerUser',
  validate(props) {
    check(props, {
      username: String,
      password: String
    });
  },
  run(props) {
    const { username, password } = props;

    // create user with given email and role
    const userId = Accounts.createUser({
      username,
      password,
    });

    return { userId };
  }
});
