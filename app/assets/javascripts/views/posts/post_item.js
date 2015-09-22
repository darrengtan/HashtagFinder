HashtagFinder.Views.PostItem = Backbone.View.extend({
  template: JST["posts/item"],
  className: "post-item",
  tagName: "li",

  render: function () {
    this.$el.html(this.template({ post: this.model }));
    return this;
  },

  sayHi: function () {
    console.log("hi");
  }
});
