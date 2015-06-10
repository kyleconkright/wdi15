Users = new Mongo.Collection("users");
Slacks = new Mongo.Collection("slacks");

if (Meteor.isClient) {

    Template.body.helpers({

        slacks: function () {
            // var user = Users.findOne({})
            var allSlacks =  Slacks.find({"user":Users.findOne({}).id});
            return allSlacks
        }

    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
