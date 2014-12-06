app.templates = {};

app.templates.indexview = _.template(
  '<a class="btn btn-primary" href="/#/search/">search</a>'+
  '<a class="btn btn-primary" href="/#/choose/">choose</a>'
);
app.templates.searchView = _.template(
  '<form role="form">'+
    '<div class="form-group">'+
      '<div>search page</div>'+
      '<a class="btn btn-primary" href="/">back</a>'+
      '<div class="row">'+
        '<div class="col-xs-6">'+
          '<label for="exampleInputPassword1">Password</label>'+
          '<select class="form-control">'+
            '<option>1</option>'+
            '<option>2</option>'+
          '</select>'+
          '<label for="exampleInputPassword1">Password</label>'+
          '<select class="form-control">'+
            '<option>1</option>'+
          '</select>'+
          '<label for="exampleInputPassword1">Password</label>'+
          '<select class="form-control">'+
            '<option>1</option>'+
            '<option>2</option>'+
            '<option>3</option>'+
          '</select>'+
        '</div>'+  
      '</div>'+
    '</div>'+
    '<button type="submit" class="btn btn-default">Submit</button>'+
  '</form>'
);

app.templates.main = _.template(
  '<div id="videos-list"></div>'    
);

app.templates.listItem = _.template(
  '<p class="lead">{{title}}</p>' +
  '<p class="lead">{{description}}</p>' +
  '<img src="{{thumbnailsS}}" alt="{{title}}"><br>' +
  '<img src="{{thumbnailsM}}" alt="{{title}}"><br>' +
  '<img src="{{thumbnailsL}}" alt="{{title}}"><br>' +
  '<iframe width="560" height="315" src="//www.youtube.com/embed/{{videoId}}?rel=0" frameborder="0" allowfullscreen></iframe>'
);


app.templates.searchForm = _.template(
  '<h1><i class="fa fa-check-square-o"></i> Todos</h1>' +
  '<form class="pure-form pure-form-stacked" id="search-form">' +
    '<fieldset>' +
      '<div class="pure-control-group">' +
        '<label for="search-input">Todo Title</label>' +
        '<input id="search-input" class="form-control" type="text">' +
      '</div>' +
      '<div class="pure-controls">' +
        '<button id="search-btn" class="pure-button">Search</button>' +
      '</div>' +
    '</fieldset>' +
  '</form>' +
  '<hr>' +
  '<h3>You searched for <span class="searchTerm"></span>Search Results</h3>' +
  '<ol id="search-results">' +
  '</ol>'
);
