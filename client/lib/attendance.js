//1.직접로그인아디받아서 데이터 뿌리기
//2.최신순으로
//3. 정렬 손보기
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Template } from "meteor/templating";

const { Attendance } = require("../../api/collection");

const user = Meteor.user();
console.log("user1", user);

Template.attendance_list.helpers({
  list() {
    return Attendance.find(
      { user_id: "4ZKL2rrdTip7ZGcNL" },
      { limit: 20 }
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
  "click #search": function () {
    FlowRouter.go("/admin");
  },
});

Template.attendance_System.events({
  "click button[name=go_to_work]": function (e, i) {
    // const user = Meteor.user();
    // console.log("user", user);

    Attendance.insert({
      user_id: user._id,
      name: user.username,
      profile_name: user.profile.name,
      in_createdAt: new Date(),
      type: "출석",
    });
    alert("✅ 출근되셨습니다");

    // const insert = Users2.insert({ find }, {});
    // Session.set("start_work", start_time);
    // console.log("start_work", start_time);
  },

  "click button[name=finish_work]": function (e, i) {
    Attendance.insert({
      user_id: user._id,
      name: user.username,
      profile_name: user.profile.name,
      out_createdAt: new Date(),
      type: "퇴근",
    });
    alert("☄️️ 퇴근되셨습니다");
    // console.log(Attendance);

    // Users2.insert({ out: end_time });
    // Session.set("end_work", end_time);
    // console.log("end_time", end_time);
  },
});
//
