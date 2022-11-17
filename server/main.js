import { Meteor } from "meteor/meteor";
import { Users2 } from "../lib/collection";

Meteor.startup(() => {
  if (Users2.find().count() == 0) {
    // var users = [];
    for (var i = 0; i < 5; i++) {
      Users2.insert({
        name: "name" + i,
        nickname: "nickname" + i,
        password: "password" + i,
        // in: now_time,
        // out: now_time,
      });
    }
    // console.log(Users.find({}));
    console.log(Users2.find({}).fetch());
    console.log("서버스타트");
  } else {
    console.log(Users2.find({}).fetch());
    console.log("서버가 정상적");
  }
});
