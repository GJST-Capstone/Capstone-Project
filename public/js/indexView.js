app.IndexView = Backbone.View.extend({
  el: "#my-app",
  initialize: function() {
  },
  render: function() {
    this.$el.html(app.templates.indexview);
  }
});

