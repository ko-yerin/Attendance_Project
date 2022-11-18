import { Meteor } from "meteor/meteor";
import { Users2 } from "../api/collection";
import "../api/routes";

Meteor.startup(() => {
  // Attendance.remove({});
  if (Users2.find().count() === 0) {
    // var users = [];
    for (var i = 0; i < 5; i++) {
      Users2.insert({
        username: "name" + i,
        nickname: "nickname" + i,
        password: "password" + i,
      });
    }
    // console.log(Users.find({}));
    console.log(Users2.find({}).fetch());
    console.log("서버스타트");
  } else {
    console.log(Users2.find({}).fetch());
    console.log("서버가 정상적");
  }
});

// 가입 시 사용자 정보 핸들링
Accounts.onCreateUser(function (options, user) {
  // options는 createUser에서 넘어오는 정보, user는 실제로 데이터베이스에 저장될 정보
  user.profile = options.profile; // 사용자 입력 값을 저장될 값으로 넣어줌
  user.profile.idAdmin = false; // 기본이 어드민 아님
  return user;
});

// 가입 정보 정합성 확인하기
Accounts.validateNewUser(function (user) {
  // user는 Accounts.onCreateUser함수에서 반환한 값
  console.log(1, user.username.length);
  if (user.username && user.username.length >= 3) {
    return true;
  } else {
    throw new Meteor.Error(403, "사용자명은 적어도 3자 이상.");
  }
});
