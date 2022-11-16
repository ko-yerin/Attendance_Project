import { Meteor } from "meteor/meteor";

import { Users } from "/lib/collection";

Meteor.startup(() => {
  if (Users.find().count() == 0) {
    // var users = [];
    for (var i = 0; i < 30; i++) {
      Users.insert({
        name: "name" + i,
        nickname: "nickname" + i,
        password: "password" + i,
        in: new Date(),
        out: new Date(),
      });
    }
    // console.log(Users.find({}));
    console.log(Users.find({}).fetch());
    console.log("서버스타트");
  } else {
    console.log(Users.find({}).fetch());
    console.log("서버가 정상적");
  }
});
