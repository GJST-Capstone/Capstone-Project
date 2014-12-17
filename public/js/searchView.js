
app.searchModel = Backbone.Model.extend({});

app.SearchCollection = Backbone.Collection.extend({
  model: app.searchModel,
  comparator: 'cid'
});

app.searchCol = new app.SearchCollection();

app.searchCol.add([
  {
  	searchInputVal: 'workout',
  },
]);
    
app.SearchView = Backbone.View.extend({
  el: '#my-app',
  initialize: function () {

  },
  render: function () {
    this.$el.parent().removeClass( 'choose welcome results' ),
    this.$el.parent().addClass( 'search' ),
    this.$el.html(app.templates.searchForm);
    app.searchInputView = new app.SearchInputView({collection: this.collection});
  }
});

app.SearchInputView = Backbone.View.extend({
  el: '#search-form',
  events: {
    'click #search-btn': 'searchForVal'
  },
  searchForVal: function (event) {
    event.preventDefault();
    var $searchInput = $(this.el).find('#search-input');
    
    var searchInput = $searchInput.val();
    this.collection.add({searchInputVal: searchInput});
    $searchInput.val('');
    // console.log('button was clicked');
    //delete old col by creating a new one
    app.videosCol = new app.Videos();
    //add results to new col
    app.resultsView = new app.ResultsView({collection: app.videosCol});
    addSearch();
    app.router.navigate('#results/', {trigger: true})
  }
});
