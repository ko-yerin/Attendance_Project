import "./attendance.html";
import { Users2 } from "/lib/collection";

Template.attendanceSystem.events({
  "click button[name=come]": function (e, i) {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let timeString = hours + ":" + minutes + ":" + seconds;
    const start_time = dateString + "/" + timeString;

    Users2.insert({ in: start_time });
    // Session.set("start_work", start_time);
    console.log("start_work", start_time);
  },
  "click button[name=go]": function (e, i) {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let timeString = hours + ":" + minutes + ":" + seconds;
    const end_time = dateString + "/" + timeString;

    Users2.insert({ out: end_time });
    Session.set("end_work", end_time);
    console.log("end_time", end_time);
  },
});

Template.attendanceSystem.helpers({
  starting() {
    return this._id === Session.get("start_work");
  },
});
