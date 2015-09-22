HashtagFinder.Views.PostItem = Backbone.View.extend({
  template: JST["posts/item"],
  tagName: "li",
  className: "post-item",

  render: function () {
    this.$el.html(this.template({ post: this.model }));
    return this;
  }
});
