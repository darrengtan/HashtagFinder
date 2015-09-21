HashtagFinder.Views.SubmissionsIndex = Backbone.CompositeView.extend({
  template: JST["submissions/index"],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
