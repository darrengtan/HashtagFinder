HashtagFinder.Views.SidebarView = Backbone.View.extend({
  template: JST["sidebar"],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  events: {
    "click .new-submission": "createSubmission"
  },

  createSubmission: function (e) {
    var submission = new HashtagFinder.Models.Submission();
    var modal = new HashtagFinder.Views.SubmissionForm({
      model: submission,
      collection: this.collection
    });
    $('body').append(modal.$el);
    modal.render();
  }
});
