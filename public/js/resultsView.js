
app.Video = Backbone.Model.extend({});

app.Videos = Backbone.Collection.extend({
  model: app.Video,
  comparator: 'cid',
});

app.videosCol = new app.Videos();

app.VideosListView = Backbone.View.extend({
  el: '#videos-list',
  initialize: function (opts) {
    app.searchCol.on('add', this.render, this); 
  },

  render: function () {

    var outputHtml = '';
    var videoIdList = [];
    var data = {};
    this.collection.models.forEach(function (video) {
      var vidId = video.get('id2');
      var snippet = video.get('snippet');
      //add youtube api-data to the obj we call in the template
      data.likes = 0;
      data.videoId = vidId.videoId;
      data.title = snippet.title;
      data.description = snippet.description;
      data.thumbnailsS = snippet.thumbnails.default.url;
      data.thumbnailsM = snippet.thumbnails.medium.url;
      data.thumbnailsL = snippet.thumbnails.high.url;
      // output template and provide data obj          
      outputHtml += app.templates.resultItem(data);
    });
    // console.log('Vids Were rendered');
    // console.log('searchCol has add from router:results');
    $(this.el).html(outputHtml);
    $(".ytvid").fitVids();
  }
});


app.ResultsView = Backbone.View.extend({
  el: '#my-app',
  initialize: function () {

  },
  render: function () {
    this.$el.parent().removeClass( 'choose welcome search' ),
    this.$el.parent().addClass( 'results' ),   

    this.$el.html(app.templates.main);
    app.listView = new app.VideosListView({collection: this.collection});
    app.listView.render();
  }
});
