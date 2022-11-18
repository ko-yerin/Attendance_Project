// import "./attendance.html";
// import { Users2, Attendance } from "../../../api/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Template } from "meteor/templating";

const { Users2, Attendance } = require("../../api/collection");

Template.attendance_list.helpers({
  list() {
    return Attendance.find(
      { user_id: "qq7ndM68agpqjMq8f" },
      { limit: 100 }
    ).fetch();
  },
  getInDate(date) {
    return date.toLocaleString();
  },
  getOutDate(date) {
    return date.toLocaleString();
  },
});
Template.attendance_list.events({
  "click #search": function (){
    FlowRouter.go("/admin");
  },
  })

Template.attendance_System.events({
  "click button[name=go_to_work]": function (e, i) {
    const user1 = Meteor.user();
    console.log(user1);

    const user = Users2.findOne();
    // const user = Users2.find({ _id });
    Attendance.insert({
      user_id: user._id,
      in_createdAt: new Date(),
      type: "출석",
    });
    alert("✅ 출근되셨습니다")
    console.log(Attendance)
    // console.log("user", user);

    //
    // const insert = Users2.insert({ find }, {});
    // Session.set("start_work", start_time);
    // console.log("start_work", start_time);
  },

  "click button[name=finish_work]": function (e, i) {
    // const user = Users2.findOne();
    const user = Users2.find({ _id });
    Attendance.insert({
      user_id: user._id,
      out_createdAt: new Date(),
      type: "퇴근",
    });
    alert("☄️️ 퇴근되셨습니다")
    console.log(Attendance)

    // Users2.insert({ out: end_time });
    // Session.set("end_work", end_time);
    // console.log("end_time", end_time);
  },
});
//
