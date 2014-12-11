app.IndexView = Backbone.View.extend({
  el: "#my-app",
  initialize: function() {
  },
  render: function() {

  	console.log(app.weather);

  	this.$el.parent().removeClass( 'choose search results' );
  	this.$el.parent().addClass( 'welcome' );
  	
    this.$el.html(app.templates.indexview);
  }
});



//el:"#weather"
//function runs win weather ready and renders view
//(weatherReady){render view} 

// 
//  var data={};
//  data.city = app.weather.location.city;
//  data.state = app.weather.location.state;
//  data.img = app.weather.current_observation.icon_url;
//  data.weather = app.weather.current_observation.weather;
//  data.temp_f = app.weather.current_observation.temp_f;


