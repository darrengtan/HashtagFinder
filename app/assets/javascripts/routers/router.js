HashtagFinder.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$sidebarEl = options.$sidebarEl;
    this.submissions = options.submissions;
    this.posts = options.posts;
    var sidebarView = new HashtagFinder.Views.SidebarView({
      collection: this.submissions
    });

    this.$sidebarEl.html(sidebarView.render().$el);
  },

  routes: {
    "": "root",
    "submissions": "submissionsIndex",
    "submissions/:id": "submissionShow"
  },

  // placeholder, doesn't actually do anything for now
  submissionsIndex: function () {
    this.submissions.fetch();
    var view = new HashtagFinder.Views.SubmissionsIndex({
      collection: this.submissions
    });

    this._swapView(view);
  },

  submissionShow: function (id) {
    var submission = this.submissions.getOrFetch(id);
    var view = new HashtagFinder.Views.SubmissionShow({
      model: submission,
      submissions: this.submissions
    });

    this._swapView(view);
  },

  // prevent zombie views using composite views
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
