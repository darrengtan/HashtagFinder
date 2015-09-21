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
    "": "submissionsIndex",
    "submissions": "submissionsIndex",
    "submissions/:id": "submissionShow"
  },

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

  _swapView: function (view) { // prevent zombie views using composite views
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
