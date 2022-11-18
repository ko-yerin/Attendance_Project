import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import "./user.html";
import { Users2 } from "../../api/collection";

// import ".../api/routes.js";
// import "../../api/routes";

import "../../api/routes.js";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.customSignUp.events({
  "click button[name=signUp]"(evt, tmpl) {
    const userid = tmpl.find("input[name=userid]").value; // 로그인 때 필요한 아이디
    const email = tmpl.find("input[name=email]").value;
    const password = tmpl.find("input[name=password]").value;
    const password2 = tmpl.find("input[name=password2]").value;
    const name = tmpl.find("input[name=name]").value;

    if (password != password2) {
      alert("비밀번호를 확인하세요!");
      return;
    }

    const userInfo = { username: userid, email, password, profile: { name } }; // 미티어는 몽고디비의 user 컬렉션에서 사용자와 접속자 정보를 관리하므로 이 스키마를 임의로 변경하면 안됨

    // 사용자 회원 가입 성공 여부 검사
    Accounts.createUser(userInfo, function (error) {
      // 두 번째 매개변수는 콜백함수로 성공여부 반환
      if (!!error) {
        alert(error.reason);
      } else {
        alert("회원가입 성공!");
        $(tmpl.findAll("input")).val("");
        FlowRouter.go("/attendanceSystem");
      }
    });
  },
});

Template.customLogIn.events({
  "click button[name=login]"(evt, tmpl) {
    const email = tmpl.find("input[name=email]").value;
    const password = tmpl.find("input[name=password]").value;

    Meteor.loginWithPassword(email, password, function (error) {
      if (!error) {
        Meteor.logoutOtherClients(); //Meteor.logoutOtherClients : 현재 클라이언트에 로그인된 사용자를 로그아웃시킴
      } else {
        alert(error.reason);
      }
    });
  },
  "click button[name=logout]"(evt, tmpl) {
    // 로그아웃
    Meteor.logout();
  },
});

// 로그인되었으면 로그인 버튼 아래에 username 표시
Template.customLogIn.helpers({
  loginY() {
    // 로그인 여부 반환
    console.log(1, Meteor.user());
    console.log(2, !!Meteor.user());
    return !!Meteor.user(); // 로그인 되면 true 반환
  },
  username() {
    //username 반환
    const usr = Meteor.user();
    if (!!usr) return usr.username;
    else return "";
  },
});
