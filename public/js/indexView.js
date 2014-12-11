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



	if(weatherdata.weather === 'Clear'){
		weatherdata.weather = "it's clear, maybe go outside";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Partly Cloudy'){
		weatherdata.weather = "it's partly cloudy, treadmills are fun";
		weatherdata.img = '<i data-icon="H"></i>';
	}
	if(weatherdata.weather === 'Mostly Cloudy'){
		weatherdata.weather = "clouds are warm and it's not raining...";
		weatherdata.img = '<i data-icon="N"></i>';
	}
	if(weatherdata.weather === 'Cloudy'){
		weatherdata.weather = "it's so cloudy it could be nighttime?";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Hazy'){
		weatherdata.weather = "don't be lazy cause it's hazy";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Foggy'){
		weatherdata.weather = "Fog or Smog";
		weatherdata.img = '<i data-icon="Y"></i>';
	}
	if(weatherdata.weather === 'Very Hot'){
		weatherdata.weather = "Go outside, drink water, and get hot";
		weatherdata.img = '<i data-icon="\'"></i><i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Very Cold'){
		weatherdata.weather = "sooo cold, what about a gym";
		weatherdata.img = '<i data-icon="\'"></i><i data-icon="G"></i>';
	}
	if(weatherdata.weather === 'Blowing Snow'){
		weatherdata.weather = "noooo! there's snow";
		weatherdata.img = '<i data-icon="F"></i><i data-icon="G"></i>';
	}
	if(weatherdata.weather === 'Chance of Showers'){
		weatherdata.weather = "maybe it will rain? maybe it wont";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Showers'){
		weatherdata.weather = "it's raining it's pouring don't be boring, go to the gym";
		weatherdata.img = '<i data-icon="B"></i>';
	}
	if(weatherdata.weather === 'Chance of Rain'){
		weatherdata.weather = "50% chance of 50% rain";
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
		weatherdata.weather = "bzzz! wear rubber shoes";
		weatherdata.img = '<i data-icon="P"></i>';
	}
	if(weatherdata.weather === 'Flurries'){
		weatherdata.weather = "flurries";
		weatherdata.img = '<i data-icon="U"></i>';
	}
	if(weatherdata.weather === 'OMITTED'){
		weatherdata.weather = "? we're not sure... um, zombies";
		weatherdata.img = '<i data-icon="\)"></i>';
	}
	if(weatherdata.weather === 'Chance of Snow Showers'){
		weatherdata.weather = "there could be some snow or rain";
		weatherdata.img = '<i data-icon="V"></i>';
	}
	if(weatherdata.weather === 'Snow Showers'){
		weatherdata.weather = "wet and white";
		weatherdata.img = '<i data-icon="W"></i>';
	}
	if(weatherdata.weather === 'Chance of Snow'){
		weatherdata.weather = "the gym could be warm";
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
		weatherdata.weather = "get some coco and stay indoors";
		weatherdata.img = '<i data-icon="W"></i>';
	}





		weatherdata.temp_f = data.current_observation.temp_f;

		console.log(data)
    this.$el.html(app.templates.weatherview(weatherdata));
  }
});



