// import "./attendance.html";
// import { Users2, Attendance } from "../../../api/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

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

Template.attendance_System.events({
  "click button[name=go_to_work]": function (e, i) {
    const user1 = Meteor.user();
    console.log(user1);

    const user = Users2.findOne();
    // const user = Users2.find({ _id });
    // console.log("user", user);
    Attendance.insert({
      user_id: user._id,
      in_createdAt: new Date(),
      type: "출석",
    });

    //
    // const insert = Users2.insert({ find }, {});
    // Session.set("start_work", start_time);
    // console.log("start_work", start_time);
  },
  "click button[name=finish_work]": function (e, i) {
    const user = Users2.findOne();
    // const user = Users2.find({ _id });
    // console.log("user", user);
    Attendance.insert({
      user_id: user._id,
      out_createdAt: new Date(),
      type: "퇴근",
    });

    // Users2.insert({ out: end_time });
    // Session.set("end_work", end_time);
    // console.log("end_time", end_time);
  },
});
//
// Template.attendance_System.helpers({
//   starting() {
//     return this._id === Session.get("start_work");
//   },
// });
