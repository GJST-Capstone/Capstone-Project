app.fakeDataModel = Backbone.Model.extend({});

app.FakeDataCollection = Backbone.Collection.extend({
  model: app.fakeDataModel,
  comparator: 'cid'
});

app.fakeDataCol = new app.FakeDataCollection();

var pageone = {
 "kind": "youtube#searchListResponse",
 "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/64eiWm-thhx77I1DfQ2sDizSXpA\"",
 "nextPageToken": "CAEQAA",
 "pageInfo": {
  "totalResults": 941,
  "resultsPerPage": 1
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/89kCyZ45VUbGKwdnN8UNkZQ62VI\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "8zI5EoiYi1c"
   },
   "snippet": {
    "publishedAt": "2012-04-19T19:44:17.000Z",
    "channelId": "UCD0nBMLdq_KbIK9u-mzpNkA",
    "title": "Jillian Michaels: Standing Abs Workout",
    "description": "Jillian Michaels: Standing Abs Workout is a short abdominal exercise circuit that is designed to sculpt six pack abs, strengthen the core, burn calories, and...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/default.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/mqdefault.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/hqdefault.jpg"
     }
    },
    "channelTitle": "BeFit",
    "liveBroadcastContent": "none"
   }
  }
 ]
}

app.fakeDataCol.add(pageone.items);

app.FakeDataListView = Backbone.View.extend({
  el: '#fakeDataList',
  initialize: function () {
    //console.log(this.collection.models[0].attributes)
  },
  render: function () {
    var outputHtml = '';//this.collection.models[0].attributes.items[0].snippet.title;
    this.collection.models.forEach(function (item) {
      var data = {};

      var id = item.get('id'); 
      var snippet = item.get('snippet')      
      
      data.videoId = id.videoId;
      data.title = snippet.title;
      data.description = snippet.description;
      data.thumbnailsS = snippet.thumbnails.default.url;
      data.thumbnailsM = snippet.thumbnails.medium.url;
      data.thumbnailsL = snippet.thumbnails.high.url;

      console.log(data);
      outputHtml += app.templates.listItem(data);

    });

    $(this.el).html(outputHtml);
  }

});

app.FakeDataMainView = Backbone.View.extend({
  el: '#my-app',
  initialize: function () {},
  render: function () {
    //console.log('main view render function started');
    this.$el.html(app.templates.main);
    app.fakeDataListView = new app.FakeDataListView({collection: this.collection});
    app.fakeDataListView.render();
  }
});

$(function () {
  app.fakeDataMainView = new app.FakeDataMainView({collection: app.fakeDataCol});
  app.fakeDataMainView.render();
});
