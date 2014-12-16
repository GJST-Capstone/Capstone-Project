app.IndexView = Backbone.View.extend({
  el: "#my-app",
  initialize: function() {
  },
  render: function() {
  	this.$el.parent().removeClass( 'choose search results' );
  	this.$el.parent().addClass( 'welcome' );
    this.$el.html(app.templates.indexview);
  }
});



app.WeatherView = Backbone.View.extend({
  el: "#currentWeather",
  initialize: function() {
  },
  render: function(data) {
  	var weatherdata={}
  	weatherdata.city = data.location.city;
		weatherdata.state = data.location.state;
		weatherdata.img = data.current_observation.icon_url;
		weatherdata.weather = data.current_observation.weather;
		console.log(weatherdata.weather);



	if(weatherdata.weather === 'Clear'){
		weatherdata.weather = "it's clear, go outside and move!";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Partly Cloudy'){
		weatherdata.weather = "it's partly cloudy with a chance of health shakes";
		weatherdata.img = '<i data-icon="H"></i>';
	}
	if(weatherdata.weather === 'Mostly Cloudy'){
		weatherdata.weather = "mostly cloudy, like a fuzzy blanket";
		weatherdata.img = '<i data-icon="N"></i>';
	}
	if(weatherdata.weather === 'Cloudy'){
		weatherdata.weather = "it's so cloudy you might need a flashlight";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Hazy'){
		weatherdata.weather = "don't be lazy 'cause it's hazy";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Foggy'){
		weatherdata.weather = "Fog or Smog?";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Very Hot'){
		weatherdata.weather = "go outside, drink water, and get hot";
		weatherdata.img = '<i data-icon="\'"></i><i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Very Cold'){
		weatherdata.weather = "so so cold, get hot in the gym";
		weatherdata.img = '<i data-icon="\'"></i><i data-icon="G"></i>';
	}
	if(weatherdata.weather === 'Blowing Snow'){
		weatherdata.weather = "noooo! there's snow";
		weatherdata.img = '<i data-icon="F"></i><i data-icon="G"></i>';
	}
	if(weatherdata.weather === 'Chance of Showers'){
		weatherdata.weather = "maybe it will rain? maybe it won't";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Showers'){
		weatherdata.weather = "it's raining, it's pouring, don't be boring...go to the gym";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Chance of Rain'){
		weatherdata.weather = "50% chance of rain";
		weatherdata.img = '<i data-icon="Q"></i>';
	}
	if(weatherdata.weather === 'Rain'){
		weatherdata.weather = "rain day, stretch first";
		weatherdata.img = '<i data-icon="R"></i>';
	}
	if(weatherdata.weather === 'Chance of a Thunderstorm'){
		weatherdata.weather = "Thor might visit you";
		weatherdata.img = '<i data-icon="O"></i>';
	}
	if(weatherdata.weather === 'Thunderstorm'){
		weatherdata.weather = "bzzz! wear rubber shoes cause there be thunder";
		weatherdata.img = '<i data-icon="P"></i>';
	}
	if(weatherdata.weather === 'Flurries'){
		weatherdata.weather = "no worries, it's just flurries";
		weatherdata.img = '<i data-icon="U"></i>';
	}
	if(weatherdata.weather === 'OMITTED'){
		weatherdata.weather = "? we're not sure... um, zombies";
		weatherdata.img = '<i data-icon="\)"></i>';
	}
	if(weatherdata.weather === 'Chance of Snow Showers'){
		weatherdata.weather = "there could be some snow, rain, or zombies";
		weatherdata.img = '<i data-icon="V"></i>';
	}
	if(weatherdata.weather === 'Snow Showers'){
		weatherdata.weather = "wet and white snow";
		weatherdata.img = '<i data-icon="W"></i>';
	}
	if(weatherdata.weather === 'Chance of Snow'){
		weatherdata.weather = "if it isnt snowing then it will be raining";
		weatherdata.img = '<i data-icon="V"></i>';
	}
	if(weatherdata.weather === 'Snow'){
		weatherdata.weather = "take a snow day and go skiing";
		weatherdata.img = '<i data-icon="W"></i>';
	}
	if(weatherdata.weather === 'Chace of Ice Pellets'){
		weatherdata.weather = "the ice is falling";
		weatherdata.img = '<i data-icon="X"></i>';
	}
	if(weatherdata.weather === 'Ice Pellets'){
		weatherdata.weather = "the ice is definitely falling";
		weatherdata.img = '<i data-icon="X"></i>';
	}
	if(weatherdata.weather === 'Blizzard'){
		weatherdata.weather = "get some cocoa and stay indoors";
		weatherdata.img = '<i data-icon="W"></i>';
	}





		weatherdata.temp_f = data.current_observation.temp_f;

		console.log(data)
    this.$el.html(app.templates.weatherview(weatherdata));
  }
});



