//1.직접로그인아디받아서 데이터 뿌리기
//2.최신순으로
//3. 정렬 손보기
//4. 버튼1번 누르고 그담에는 안눌리게
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Template } from "meteor/templating";

const { Attendance } = require("../../api/collection");

Template.attendance_list.helpers({
  list() {
    const user = Meteor.user();

    console.log("user", user);
    console.log("id", user._id);

    return Attendance.find(
      { user_id: user._id },
      { limit: 20, sort: { in_createdAt: 1 } }
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
    const user = Meteor.user();
    console.log("work ", user);

    Attendance.insert({
      user_id: user._id,
      in_createdAt: new Date(),
      type: "출석",
    });
    alert("✅ 출근되셨습니다");
    console.log(Attendance);

    // const insert = Users2.insert({ find }, {});
    // Session.set("start_work", start_time);
    // console.log("start_work", start_time);
  },

  "click button[name=finish_work]": function (e, i) {
    const user = Meteor.user();
    console.log("back", user);

    Attendance.insert({
      user_id: user._id,
      out_createdAt: new Date(),
      type: "퇴근",
    });
    alert("☄️️ 퇴근되셨습니다");
    console.log(Attendance);

    // Users2.insert({ out: end_time });
    // Session.set("end_work", end_time);
    // console.log("end_time", end_time);
  },
});
//
