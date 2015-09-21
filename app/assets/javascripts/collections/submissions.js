HashtagFinder.Collections.Submissions = Backbone.Collection.extend({
  url: "api/submissions",

  getOrFetch: function (id) {
    var submission = this.get(id);
    if (!submission) {
      submission = new HashtagFinder.Models.Submission({ id: id });
      this.add(submission);
      submission.fetch({
        error: function () {
          this.remove(submission);
        }.bind(this)
      });
    } else {
      submission.fetch();
    }

    return submission;
  }
});
