import { Template } from "meteor/templating";
//meteor add session
import "./searchModal.html";
import { Session } from "meteor/session";
import { Attendance, Users2 } from "/api/collection";

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
    return Session.get("profile");
  },
  check() {
    return Attendance.find({ profile_name: Session.get("profile") }); // 유저 in out
  },
});
