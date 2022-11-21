Template.layout.helpers({
  loginY() {
    console.log(!!Meteor.user())
    return !!Meteor.user()

  }
})
