app.Router = Backbone.Router.extend({
    routes: {
        "results/": "results",
        "*actions": "/" // Backbone will try match the route above first
    }
});
// Instantiate the router
app.router = new app.Router;

app.router.on('route:results', function () {
    app.resultsView = new app.ResultsView({collection: app.videosCol});
    app.resultsView.render();   
});

app.router.on('route:/', function () {
    app.indexView = new app.IndexView();
    app.indexView.render();  
});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

// $(function () {
//   app.resultsView = new app.ResultsView({collection: app.videosCol});
//   app.resultsView.render();
// });

