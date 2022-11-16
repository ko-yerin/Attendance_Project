import { Template } from "meteor/templating";
//meteor add session
import "./searchModal.html";
import { Users } from "/lib/collection";
import { Session } from "meteor/session";


Template.modal.helpers({});

Template.modal.events({
  "click #close": function (event, template) {

    var con = document.getElementById("hidden");
    con.style.display="none";
  },
});

Template.modal.helpers({
  nickNameFind(){
    // console.log("check",Users.find({name}).fetch())
    return Session.get("a")
  },
  check(){
    return Users.find({nickname:Session.get("a")}); // 유저 in out
  },

  // Admin() {
  //   return Users.find({});
  // },
  // getName() {
  //   return Users.find({});
  // },
  // getNickName() {
  //   return Users.find();
  // },
  // getInDate(date) {
  //   return date.toLocaleString();
  // },
  // getOutDate(date) {
  //   return date.toLocaleString();
  // },
});
