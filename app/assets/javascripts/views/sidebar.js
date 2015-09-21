HashtagFinder.Views.SidebarView = Backbone.View.extend({
  template: JST["sidebar"],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createSubmission: function (e) {
    e.preventDefault();
    var submission = new HashtagFinder.Models.Tournament();
    var modal = new HashtagFinder.Views.SubmissionForm({
      model: submission,
      collection: this.collection
    });
    $('body').append(modal.$el);
    modal.render();
  }
});
