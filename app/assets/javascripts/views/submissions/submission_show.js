HashtagFinder.Views.SubmissionShow = Backbone.CompositeView.extend({
  template: JST["submissions/show"],

  initialize: function (options) {
    this.submissions = options.submissions;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.posts(), "add", this.addPostItemSubview);
    this.model.posts().each(this.addPostItemSubview.bind(this));
  },

  render: function () {
    this.$el.html(this.template({ submission: this.model }));
    return this;
  },

  addPostItemSubview: function (post) {
    var view = new HashtagFinder.Views.PostItem({ model: post });
    this.addSubview("ul.posts-container", view);
  }
});
