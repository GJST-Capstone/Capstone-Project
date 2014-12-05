app.Router = Backbone.Router.extend({
    routes: {
        "search/": "search",
        "results/": "results",
        "*actions": "/" // Backbone will try match the route above first
    }
});
// INIT the router and .get the data

//data obj
var results = {};

app.router = new app.Router;
app.router.on('route:results', function () {
    //create the collection
    app.resultsView = new app.ResultsView({collection: app.videosCol});
    //save the url
    

    var firstURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';
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
    
    //get the data
    $.get(firstURL, null, vidDataCallback);


});
app.router.on('route:search', function () {
    app.searchView = new app.SearchView();
    app.searchView.render();  
});

app.router.on('route:/', function () {
    app.indexView = new app.IndexView();
    app.indexView.render();  
});



// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

