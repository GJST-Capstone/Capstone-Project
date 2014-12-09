app.IndexView = Backbone.View.extend({
  el: "#my-app",
  initialize: function() {
  },
  render: function() {
  	this.$el.parent().removeClass( 'choose search results' ),
  	this.$el.parent().addClass( 'welcome' ),
    this.$el.html(app.templates.indexview);
  }
});

