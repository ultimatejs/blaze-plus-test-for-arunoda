if(Meteor.isServer) return;

Template.TestContainer.onCreated(function() {
  this.foo = 123;
});

Template.TestContainer.events({
  'click .test': function(e, t) {
    console.log('TEMPLATE', this, t.foo)
  }
});

Template.TestContainer.helpers({
  getUser: function() {
    var name = Session.get("name") || "James";
    return {name: name};
  },
  getDog: function() {
    var name = Session.get("dog") || "Lucy";
    return {name: name};
  }
});

Template.Test.helpers({
  getName: function() {
    return this.name;
  }
});

Template.Test.onCreated(function() {
  console.log('CREATED');
});

Template.Test.onRendered(function() {
  console.log('RENDERED'); //yes, i also did the inspect element + manually change text test too
});