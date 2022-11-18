import { Template } from "meteor/templating";
//meteor add session
import "./searchModal.html";
import { Session } from "meteor/session";
import { Users2 } from "/api/collection";

// import "../../api/routes";

Template.modal.helpers({});

Template.modal.events({
  "click #close": function (event, template) {
    var con = document.getElementById("hidden");
    con.style.display = "none";
  },
});

Template.modal.helpers({
  nickNameFind() {
    // console.log("check",Users.find({name}).fetch())~
    return Session.get("a");
  },
  check() {
    return Users2.find({ nickname: Session.get("a") }); // 유저 in out
  },
});
