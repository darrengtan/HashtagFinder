window.HashtagFinder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var $rootEl = $("div#main-content");
    var $sidebarEl = $("div#sidebar");
    var submissions = new HashtagFinder.Collections.Submissions();
    var posts = new HashtagFinder.Collections.Posts();
    var router = new HashtagFinder.Routers.Router({
      $rootEl: $rootEl,
      $sidebarEl: $sidebarEl,
      submissions: submissions,
      posts: posts
    });

    Backbone.history.start();
  }
};
