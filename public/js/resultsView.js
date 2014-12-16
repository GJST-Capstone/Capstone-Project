
app.Video = Backbone.Model.extend({
  defaults: {
    like:0

  }
});

app.Videos = Backbone.Collection.extend({
  // url: '/api',
  model: app.Video,
  comparator: 'cid',
  // display: function() { //custom method
  //   // console.log("Keys: "+this.pluck('key'));
  //   // console.log("likes: "+this.pluck('like'));
  //   console.log("display function in app.Videos collection")
  // }
});

app.videosCol = new app.Videos();

app.VideosListView = Backbone.View.extend({
  el: '#videos-list',
  initialize: function (opts) {
    app.searchCol.on('add', this.render, this); 
    //app.searchCol.listenTo(this.model, 'change', this.render);
  },

  render: function () {

    var outputHtml = '';
    var keyList = [];
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
      video.set('videoKey', data.videoId);
      //output template and provide data obj          
      outputHtml += app.templates.resultItem(data);
      keyList.push(data.videoId);
    });
    console.log('Vids Were rendered');
    console.log('searchCol has add from router:results') 
    $(this.el).html(outputHtml);

// use keyList to generate a get request to the server 
//    translate keys to string format
// put the keys in get request to database
// provide success callback to call only once
//    write the function in another place and call by var name
//       only parameter is the return string from the server
//    Turn it back into an array (json.parse)
// call another function on that array that includes a property request for videoId
//    (look at refreshCollection)
// look for the app.videosCol videoID that matches the key
//    override the default "like" 

// collection.where(attribute) is a good way to look for an attibute
//    (think .get of the attibute name)

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
