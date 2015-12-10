if(Meteor.isServer) return;

Template.TestContainer.helpers({
  getUser: function() {
    var name = Session.get("name") || "James";
    return {name: name};
  }
});

Template.Test.helpers({
  getName: function() {
    return this.user.name;
  }
});

Template.Test.onCreated(function() {
  console.log('CREATED');
});

 Template.Test.onRendered(function() {
  console.log('RENDERED'); //yes, i also did the inspect element + manually change text test too
});