import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

//🚀 라우터 기능 1.로그인 2.출결 3.어드민

// FlowRouter.route("/", {
//   name: "home",
//   action() {
//     BlazeLayout.render("HomeLayout");
//   },
// });

FlowRouter.route("/", {
  name: "Home",
  action() {
    BlazeLayout.render("customSignUp");
  },
});

FlowRouter.route("/attendanceSystem", {
  name: "Attend",
  action() {
    BlazeLayout.render("attendanceSystem");
  },
});

FlowRouter.route("/admin", {
  name: "Admin",
  action() {
    BlazeLayout.render("admin");
  },
});

// FlowRouter.route("/chat", {
//   name: "chat",
//   action() {
//     BlazeLayout.render("chatForm");
//   },
// });