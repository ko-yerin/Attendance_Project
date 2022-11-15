import { Meteor } from 'meteor/meteor';

import {Users} from "/lib/collection"

Meteor.startup(() => {
  if (Users.find().count() == 0) {
    // var users = [];
    for (var i = 0; i < 10; i++) {
      Users.insert({
        name: "name" + i,
        password: "password" + i,
        passwordCheck: "password" + i,
      });
    }
    console.log(Users.find({}));
    console.log(Users.find({}).fetch());
  }
});

