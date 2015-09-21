window.HashtagFinder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $("div#main-content");
    var $sidebar = $("div#sidebar");
    var submissions = new TournaGen.Collections.Submissions();
    var posts = new TournaGen.Collections.Posts();
    var teams = new TournaGen.Collections.Teams();
    var router = new TournaGen.Routers.Router({
      $rootEl: $rootEl,
      $formEl: $formEl,
      submissions: submissions,
      posts: posts
    });

    Backbone.history.start();
  }
};
