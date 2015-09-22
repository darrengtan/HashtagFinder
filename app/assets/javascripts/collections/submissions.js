HashtagFinder.Collections.Submissions = Backbone.Collection.extend({
  url: "api/submissions",

  getOrFetch: function (id) {
    var submission = this.get(id);
    if (!submission) {
      // add new model to collection and fetch
      submission = new HashtagFinder.Models.Submission({ id: id });
      this.add(submission);
      submission.fetch({
        error: function () {
          this.remove(submission);
        }.bind(this)
      });
    } else {
      // else fetch if already exists
      submission.fetch();
    }

    return submission;
  }
});
