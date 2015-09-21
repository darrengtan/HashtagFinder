HashtagFinder.Models.Post = Backbone.Model.extend({
  instagramUsername: function () {
    return this.attributes.user.username;
  },

  instagramLink: function () {
    return this.attributes.link;
  },

  instagramImage: function () {
    return this.attributes.images.standard_resolution.url;
  },

  instagramVideo: function () {
    var video = this.attributes.videos;
    return video ? video.standard_resolution.url : null;
  }
});
