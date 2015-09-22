HashtagFinder.Views.SubmissionShow = Backbone.CompositeView.extend({
  template: JST["submissions/show"],

  initialize: function (options) {
    this.submissions = options.submissions;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.posts(), "add", this.addPostItemSubview);
    this.listenForScroll();
  },

  // add more posts once window at bottom of page
  listenForScroll: function () {
    $(window).off("scroll");
    var throttledCallback = _.throttle(this.fetchMorePosts.bind(this), 500);
    $(window).on("scroll", throttledCallback);
  },

  // get next subcollection of posts
  fetchMorePosts: function (e) {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      $.ajax({
        url: "/api/submissions",
        type: "POST",
        data: {
          "next_page": this.model.get("next_page"),
          submission: {
            "hashtag": this.model.get("hashtag"),
            "start_date": this.model.get("start_date"),
            "end_date": this.model.get("end_date")
          }
        },
        success: function (response) {
          this.model.set({"next_page": response.next_page});
          this.model.posts().add(response.collection_data);
        }.bind(this)
      });
    }
  },

  render: function () {
    this.$el.html(this.template({ submission: this.model }));
    // render first 20 posts for submission
    this.model.posts().each(this.addPostItemSubview.bind(this));
    return this;
  },

  addPostItemSubview: function (post) {
    var view = new HashtagFinder.Views.PostItem({ model: post });
    this.addSubview("ul.posts-container", view);
  }
});
