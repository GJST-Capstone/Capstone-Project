app.Video = Backbone.Model.extend({});

app.Videos = Backbone.Collection.extend({
  model: app.Video,
  comparator: 'cid',
  
});

app.videosCol = new app.Videos(results.items);

app.VideosListView = Backbone.View.extend({
  el: '#videos-list',
  initialize: function (opts) {},
  render: function () {
    var outputHtml = '';
    var data = {};
    this.collection.models.forEach(function (video) {

            var vidId = video.get('id2'); 
            var snippet = video.get('snippet')      
            
            data.videoId = vidId.videoId;
            data.title = snippet.title;
            data.description = snippet.description;
            data.thumbnailsS = snippet.thumbnails.default.url;
            data.thumbnailsM = snippet.thumbnails.medium.url;
            data.thumbnailsL = snippet.thumbnails.high.url;
      
            //console.log(video);
          
            outputHtml += app.templates.listItem(data);


    });
    console.log('this is the data for resultsView')
    console.log(data);
    //console.log(outputHtml);

    $(this.el).html(outputHtml);
  }


});

app.ResultsView = Backbone.View.extend({
  el: '#my-app',
  initialize: function () {

  },
  render: function () {
    this.$el.html(app.templates.main);
    
    app.listView = new app.VideosListView({collection: this.collection});
    app.listView.render();
  }
});
