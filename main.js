import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';




Template.Register.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = event.target.registerEmail.value;
    var password = event.target.registerPassword.value;
    Accounts.createUser({
      email: email,
      password: password
    });
    console.log('cadastrou');
  }
});

Template.login.events(


  {
  'submit form': function (event) {
    event.preventDefault();
    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    Accounts.createUser({
      email: email,
      password: password
    });
    
  }
});
