app.Router = Backbone.Router.extend({
    routes: {
        "search/": "search",
        "results/": "results",
        "*actions": "/" // Backbone will try match the route above first
    }
});

function addSearch() {
  app.lastsearchModel = app.searchCol.length-1;
  app.searchChannelId = 'UCD0nBMLdq_KbIK9u-mzpNkA';
  app.searchResultsVal = 2;
  app.searchInputAdd = app.searchCol.models[app.lastsearchModel].attributes.searchInputVal
  app.firstURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+app.searchChannelId+'&maxResults='+app.searchResultsVal+'&q='+app.searchInputAdd+'&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';
  console.log(app.firstURL);
}

function navigateResults(){
  

}



// INIT the router and .get the data     
//data obj
var results = {};
addSearch();
app.router = new app.Router;
app.router.on('route:results', function () {
  //create the collection
  app.resultsView = new app.ResultsView({collection: app.videosCol});
  //.get callback for youtube data
  function vidDataCallback(data) {
    results = data;
    results.items.forEach(function (video){
      video.id2 = video.id
      delete video.id
    }); 
    //add the data to the collection
    app.videosCol.add(results.items);
    //render
    
    app.resultsView.render();
  }
  //get the data and run the callback
  $.get(app.firstURL, null, vidDataCallback);
});



app.router.on('route:search', function () {
  //create the collection
  app.searchView = new app.SearchView({collection: app.searchCol});
  app.searchView.render();         
 
});





app.router.on('route:/', function () {
    app.indexView = new app.IndexView();
    app.indexView.render();  
});



// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

