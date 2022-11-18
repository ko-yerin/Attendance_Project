import { Template } from "meteor/templating";
import "./admin.html";
import { Meteor } from "meteor/meteor";
// import { Users } from "/lib/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Session } from "meteor/session";
import "./searchModal";
import {Attendance, Users2} from "/api/collection";

// import "../../api/routes";

Template.admin.helpers({
  Admin() {
    return Attendance.find({});
  },
  getName() {
    return Attendance.find({});
  },
  getNickName() {
    return Attendance.find();
  },
  getInDate(date) {
    return date.toLocaleString();
  },
  getOutDate(date) {
    return date.toLocaleString();
  },
});

Template.admin.onCreated(function () {
  console.log("펍섭작업 필요");
});

Template.admin.events({
  "click #admin-button": function (event, template) {
    console.log("click");
    FlowRouter.go("/attendance_list");

    // flow router. go 활용 예정
  },
});

Template.admin.events({
  "submit #submit-form": function (event, template) {
    event.preventDefault();

    const target = event.target;
    const nick = target.nick.value;
    console.log("nick:", nick);

    var profile = Attendance.find({ profile_name: nick }).fetch()[0].profile_name;
    console.log(profile)

    if (profile == nick) {
      var con = document.getElementById("hidden");
      con.style.display = "block"; //자바스크립트 css 변경

      Session.set("profile", profile);
      console.log("Session", Session.get("profile"));

    } else {
      alert("닉네임을 찾을 수 없습니다!");
  }}
});

