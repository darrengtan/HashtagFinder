HashtagFinder.Views.SubmissionShow = Backbone.CompositeView.extend({
  template: JST["submissions/show"],

  initialize: function (options) {
    this.submissions = options.submissions;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ submission: this.model }));
    return this;
  }
});
