
app.Video = Backbone.Model.extend({
  // defaults: {
  //   like:0
  // }
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
      var snippet = video.get('snippet')      
      //add youtube api-data to the obj we call in the template
      data.likes = 0;
      data.videoId = vidId.videoId;
      data.title = snippet.title;
      data.description = snippet.description;
      data.thumbnailsS = snippet.thumbnails.default.url;
      data.thumbnailsM = snippet.thumbnails.medium.url;
      data.thumbnailsL = snippet.thumbnails.high.url;
      //output template and provide data obj          
      outputHtml += app.templates.resultItem(data);
      keyList.push(data.videoId);
    });
    console.log('Vids Were rendered');
    console.log('searchCol has add from router:results') 
    $(this.el).html(outputHtml);

    // refreshCollection();
  }
});

// console.log('KeyList outside function: ' + keyList);

// var coll = app.Videos();
// var videoKeyList = ['G5rpjkIQ2M8','BSrSoN529CY']// replace with array of results videoIds
// for (var key = 0; key<videoKeyList.length; ++key) {
//   coll.add({key:videoKeyList[key]});  // adds models to collection, but doesn't save
// }
// coll.display();

// // Functions for database calls and returns

// function findModel(key) {
//   var models = coll.where({key:key});
//   if (models.length > 1) throw "found multiple models";
//   if (models.length == 0) throw "found no models";
//   return models[0];
// }

// function refreshModel(attrObj) {
//   console.log(attrObj);
//   var model= findModel(attrObj.key);
//   model.set("like",attrObj.like);
// }

// // need to trigger this when like button clicked
// function incrementLike(key) { // videoId is 'key' and needs to be in a string form 
//   var model = findModel(key);
//   model.set("like",model.get("like")+1); // 'like' is attribute in database record. 
//   model.save();
// }

// function refreshCollection() {
//   var keyStr = coll.pluck('key').join(',');
//   $.get("/api","keys="+keyStr, function(dataStr) {
//     // dataStr is JSON array describing models currently in database
//     var arr = JSON.parse(dataStr);
//     arr.forEach(refreshModel);
//     coll.display();
//   });
// }

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
