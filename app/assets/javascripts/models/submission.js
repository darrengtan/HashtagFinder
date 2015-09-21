HashtagFinder.Models.Submission = Backbone.Model.extend({
  urlRoot: "api/submissions",

  parse: function (response) {
    if (response.collection_data) {
      this.posts().set(response.collection_data, { parse: true });
      delete response.collection_data;
    }

    return response;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new HashtagFinder.Collections.Posts([], { submission: this });
    }

    return this._posts;
  }
});
