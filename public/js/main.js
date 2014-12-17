app.Router = Backbone.Router.extend({
    routes: {
        "choose/": "choose",
        "search/": "search",
        "results/": "results",
        "": "index" // Backbone will try to match the route above first
    },

  index: function() { 
    $('#my-app').addClass('is-hidden');
    setTimeout(function() {
    $('#my-app').removeClass('is-hidden');
    app.indexView = new app.IndexView();
    app.indexView.render(); 
    weatherUnder(); 
    }, 1000);       
  },
  search: function() {
    //create the collection
    $('#my-app').addClass('is-hidden');
    setTimeout(function() {
    $('#my-app').removeClass('is-hidden');
    app.searchView = new app.SearchView({collection: app.searchCol});
    app.searchView.render();   
    }, 700);    
  },
  choose: function() {
    //create the collection
    $('#my-app').addClass('is-hidden');
    setTimeout(function() {
    $('#my-app').removeClass('is-hidden');
    app.chooseView = new app.ChooseView({collection: app.chooseCol});
    app.chooseView.render()
    }, 700);
  },
  results: function() {
    //create the collection
    app.resultsView = new app.ResultsView({collection: app.videosCol});
    //.get callback for youtube data
    function vidDataCallback(data) {
      data.items.forEach(function (video){
        video.id2 = video.id
        delete video.id
      }); 
      //add the data to the collection
      app.videosCol.add(data.items);
      
      //render
      app.resultsView.render();      
    }
    //get the data and run the callback
    $.get(app.url1, null, vidDataCallback);
    $.get(app.url2, null, vidDataCallback);
    $.get(app.url3, null, vidDataCallback);
    $.get(app.url4, null, vidDataCallback);
    $.get(app.url5, null, vidDataCallback);
    $.get(app.url6, null, vidDataCallback);
    $.get(app.url7, null, vidDataCallback);
    $.get(app.url8, null, vidDataCallback);
  }
});


var ytKey = 'AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'
var ytUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet'

app.router = new app.Router;


//create the search URL return x number
function addSearch() {
  var counter = 0;
  app.lastsearchModel = app.searchCol.length-1;
  app.searchChannelId = [
    'UCHI8IisuAV0zduaUwNzBizQ', // Chris & Heidi Powell
    'UCxTO69CggJGFQpZz-kE2k7g', // Bob Harper
    'UCgBTevPW8fsH4pQNrLufOsQ', // Tone It Up
    'UCiP6wD_tYlYLYh3agzbByWQ', // Fitness Blender
    'UCD0nBMLdq_KbIK9u-mzpNkA', // BeFit
    'UCuY1W4AwhhgkB6rsJBtltUA', // BodyRock
    'UCnUlSOVlCmoyQ6e2YQAGZZA', // DietHealth
    'UCIJwWYOfsCfz6PjxbONYXSg', // Blogilates
  ];

  app.searchResultsVal = 3;
  app.searchInputAdd = app.searchCol.models[app.lastsearchModel].attributes.searchInputVal
  //app.url1 = ytUrl+'&channelId='+app.searchChannelId+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url1 = ytUrl+'&channelId='+app.searchChannelId[0]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url2 = ytUrl+'&channelId='+app.searchChannelId[1]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url3 = ytUrl+'&channelId='+app.searchChannelId[2]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url4 = ytUrl+'&channelId='+app.searchChannelId[3]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url5 = ytUrl+'&channelId='+app.searchChannelId[4]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url6 = ytUrl+'&channelId='+app.searchChannelId[5]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url7 = ytUrl+'&channelId='+app.searchChannelId[6]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
  app.url8 = ytUrl+'&channelId='+app.searchChannelId[7]+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key='+ytKey;
}
//create the search URL return x number
function addChoose() {
  var counter = 0
  app.lastchooseModel = app.chooseCol.length-1;
  app.chooseChannelId = [
    'UCHI8IisuAV0zduaUwNzBizQ', // Chris & Heidi Powell
    'UCxTO69CggJGFQpZz-kE2k7g', // Bob Harper
    'UCgBTevPW8fsH4pQNrLufOsQ', // Tone It Up
    'UCiP6wD_tYlYLYh3agzbByWQ', // Fitness Blender
    'UCD0nBMLdq_KbIK9u-mzpNkA', // BeFit
    'UCuY1W4AwhhgkB6rsJBtltUA', // BodyRock
    'UCnUlSOVlCmoyQ6e2YQAGZZA', // DietHealth
    'UCIJwWYOfsCfz6PjxbONYXSg', // Blogilates
  ];
  app.chooseResultsVal = 3;
  app.chooseInputAdd = app.chooseCol.models[app.lastchooseModel].attributes.chooseInputVal;
  app.url1 = ytUrl+'&channelId='+app.chooseChannelId[0]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url2 = ytUrl+'&channelId='+app.chooseChannelId[1]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url3 = ytUrl+'&channelId='+app.chooseChannelId[2]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url4 = ytUrl+'&channelId='+app.chooseChannelId[3]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url5 = ytUrl+'&channelId='+app.chooseChannelId[4]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url6 = ytUrl+'&channelId='+app.chooseChannelId[5]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url7 = ytUrl+'&channelId='+app.chooseChannelId[6]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
  app.url8 = ytUrl+'&channelId='+app.chooseChannelId[7]+'&maxResults='+app.chooseResultsVal+'&q='+app.chooseInputAdd+'&key='+ytKey;
}




// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function weatherUnder() {
  $.ajax({
    url : "http://api.wunderground.com/api/76d70ebe6fc5953b/geolookup/conditions/q/autoip.json",
    dataType : "jsonp",
    success : function(data) {  
    app.weather = data;
    _.extend(data, Backbone.Events); 
      data.on("weatherLoad", function() { 
        app.weatherView = new app.WeatherView();
        app.weatherView.render(data);  
    });     
    data.trigger("weatherLoad");   
    }
  });
};




// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

