// 정렬 손보기

import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Template } from "meteor/templating";

const { Attendance } = require("../../api/collection");

Template.attendance_list.helpers({
  list() {
    const user = Meteor.user();
    // console.log("user_info", user);
    // console.log("user_id", user._id);

    return Attendance.find(

      { user_id: user._id },
      { limit: 20, sort: { in_createdAt: -1, out_createdAt: -1 } }
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

// 출근 submitCheck() 를 위한 변수
let in_submit = false;
// true=버튼눌럿을때 / false=버튼누르기전

// 퇴근 submitCheck() 를 위한 변수
let out_submit = false;

Template.attendance_System.events({
  "click button[name=go_to_work]": function () {
    const user = Meteor.user();
    // console.log("user_info ", user);

    // true false 를 판별하는 함수 ( submitCheck() ) 에서 또 true false 를 판별( submitFlag )하게 됨.
    function submitCheck() {
      if (in_submit) {
        return in_submit; // true
      } else {
        in_submit = true; // 이 submitCheck() 만을 위함.
        return false; // submitCheck() 의 리턴.
      }
    }

    if (submitCheck()) {
      alert("이미 출근처리가 완료되었습니다");
    } else {
      Attendance.insert({
        user_id: user._id,
        in_createdAt: new Date(),
        type: "출석",
      });
      alert("✅ 출근되셨습니다");
    }
  },

  "click button[name=finish_work]": function () {
    const user = Meteor.user();
    // console.log("user_info", user);

    // true false 를 판별하는 함수 ( submitCheck() ) 에서 또 true false 를 판별( submitFlag )하게 됨.
    function submitCheck() {
      if (out_submit) {
        return out_submit; // true
      } else {
        out_submit = true; // 이 submitCheck() 만을 위함.
        return false; // submitCheck() 의 리턴.
      }
    }

    if (submitCheck()) {
      alert("이미 퇴근처리가 완료되었습니다");
    } else {
      Attendance.insert({
        user_id: user._id,
        out_createdAt: new Date(),
        type: "퇴근",
      });
      alert("☄️️ 퇴근되셨습니다");
    }
  },
});
