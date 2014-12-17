
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
    //app.searchCol.listenTo(this.model, 'change', this.render);
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
      // set attribute to be accessed and compared later with database response
      video.set('videoKey', data.videoId);
      // output template and provide data obj          
      outputHtml += app.templates.resultItem(data);
      videoIdList.push(data.videoId);
    });
    console.log('Vids Were rendered');
    console.log('searchCol has add from router:results');
    $(this.el).html(outputHtml);
    $(".ytvid").fitVids();

// UPDATE LIST COUNT
// use keyList to generate a string to the server for it's search request to database
//    translate keys to string format

console.log('videokey: ' + videoKey);

// var keyString = videoKey

// use keyList to generate a get request to the orchestrate

// var keyList= videoIdList.join(',');
// console.log('keylist: ' + keyList);

// provide success callback to call only once
//    write the function in another place and call by var name
//       only parameter is the return string from the server
//    Turn it back into an array (json.parse)

function findModel(key) {
  var models = coll.where({key:key});
  if (models.length > 1) throw "found multiple models";
  if (models.length == 0) throw "found no models";
  return models[0];
}


// call another function on that array that includes a property request for videoId
//    (look at refreshCollection)

function refreshCollection() {
  var keyStr = video.videoKey.join(',');
  $.get("/api","keys="+keyStr, function(dataStr) {
    // dataStr is JSON array describing models currently in database
    var arr = JSON.parse(dataStr);
    arr.forEach(refreshModel);
    coll.display();
  });
}

// INCREMENT COUNT PER VIDEO

// listen to like button image for on.click

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
