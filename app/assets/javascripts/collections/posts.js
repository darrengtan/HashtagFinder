HashtagFinder.Collections.Posts = Backbone.Collection.extend({
  url: "api/posts",

  getOrFetch: function (id) {
    var post = this.get(id);
    if (!post) {
      post = new TournaGen.Models.Post({ id: id });
      this.add(post);
      post.fetch({
        error: function () {
          this.remove(post);
        }.bind(this)
      });
    } else {
      post.fetch();
    }

    return post;
  }
});
