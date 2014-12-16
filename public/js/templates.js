app.templates = {};

app.templates.indexview = _.template(
  '<div class="full">'+
  '<div class="container">'+
  '<div class="row start-here">'+
  '<div class="col-xs-12 col-sm-5 col-sm-offset-7">'+
  '<div id="currentWeather" class="clearfix"></div>'+
  '</div>'+
  '<div class="search-btns col-xs-12 col-sm-5 col-sm-offset-7">'+
  //'<strong>Start your search here</strong>'+
  '<a class="btn btn-primary btn-lg pairedButtons" href="/#/search/">I want to search for my workout</a>'+
  '<a class="btn btn-primary btn-lg pairedButtons" href="/#/choose/">Guide Me</a>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'
);
app.templates.weatherview = _.template(
  '<div class="col-sm-5">'+
  '<span class="weather-icon">{{img}}</span>'+
  '<span class="weather-temp">{{temp_f}}<span class="deg">&deg;</span><span class="fahrenheit">F</span></span>'+
  '<span class="weather-city">{{city}}, </span>'+
  '<span class="weather-state">{{state}}</span>'+
  '</div>'+
  '<div class=" col-sm-7 weather-text hidden-xs ">{{weather}}</div>'
);
// app.templates.searchView = _.template(
//   '<div class="full">'+
//   '<div class="container">'+
//   '<div class="col-xs-12 col-sm-5 col-sm-offset-7">'+
//   '<form role="form">'+
//     '<div class="form-group">'+
//       '<div>search page</div>'+
//       '<a class="btn btn-primary" href="/">back</a>'+
//       '<div class="row">'+
//         '<div class="col-xs-6">'+
//           '<label for="exampleInputPassword1">Password</label>'+
//           '<select class="form-control">'+
//             '<option>1</option>'+
//             '<option>2</option>'+
//           '</select>'+
//           '<label for="exampleInputPassword1">Password</label>'+
//           '<select class="form-control">'+
//             '<option>1</option>'+
//           '</select>'+
//           '<label for="exampleInputPassword1">Password</label>'+
//           '<select class="form-control">'+
//             '<option>1</option>'+
//             '<option>2</option>'+
//             '<option>3</option>'+
//           '</select>'+
//         '</div>'+  
//       '</div>'+
//     '</div>'+
//     '<button type="submit" class="btn btn-default">Submit</button>'+
//   '</form>'+
//   '</div>'+
//   '</div>'+
//   '</div>'
// );

app.templates.main = _.template(
  '<div class="container">'+
  '<div class="row">'+
  '<div id="videos-list"></div>'+
  '</div>'+
  '</div>'

);

app.templates.resultItem = _.template(
  '<div class="col-xs-12 col-sm-12 col-md-6 col-md-4">'+

  '<div class="ytvid">'+
  // '<p class="title">{{title}}</p>' +
  // '<p>{{description}}</p>' +
  // '<img src="{{thumbnailsS}}" alt="{{title}}"><br>' +
  // '<img src="{{thumbnailsM}}" alt="{{title}}"><br>' +
  // '<img src="{{thumbnailsL}}" alt="{{title}}"><br>' +
  '<iframe width="560" height="315" src="//www.youtube.com/embed/{{videoId}}?rel=0" frameborder="0" allowfullscreen></iframe>'+
  '<div class="likeThisWrap clearfix">'+
  '<button class="btn btn-primary likeThis" type="button">'+
  '<i class="fa fa-thumbs-up"></i> <span class="like-badge">0</span>'+
  '</button>'+
  '</div>'+
  '</div>'+
  '</div>'
);


app.templates.searchForm = _.template(
  '<div class="full">'+
  '<div class="container">'+
  '<div class="row search-here">'+
  '<div class="col-xs-12 col-sm-5 col-sm-offset-7">'+
  //'<strong>Search</strong>' +
  '<form id="search-form">' +
    '<fieldset>' +
        '<input id="search-input" class="form-control" type="text" placeholder="Search">' +
        '<button id="search-btn" class="btn btn-primary btn-lg pairedButtons">Search</button>' +
    '</fieldset>' +
  '</form>' +
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'
);


app.templates.chooseForm = _.template(
  '<div class="full">'+
  '<div class="container">'+
  '<div class="row choose-here">'+
  '<div class="col-xs-12 col-sm-5 col-sm-offset-7">'+
  '<strong>Guided Search</strong>' +
  '<form id="choose-form">' +
    '<fieldset>' +
      '<select class="form-control choose-controlOne">'+
        '<option value="" selected disabled>Please select</option>'+
        '<option>easy</option>'+
        '<option>medium</option>'+
        '<option>difficult</option>'+
      '</select>'+
      '<select class="form-control choose-controlTwo">'+
        '<option value="" selected disabled>Please select</option>'+
        '<option>inside</option>'+
        '<option>outside</option>'+
        '<option>gym</option>'+
      '</select>'+
      '<select class="form-control choose-controlThree">'+
        '<option value="" selected disabled>Please select</option>'+
        '<option>abs</option>'+
        '<option>back</option>'+
        '<option>butt</option>'+
      '</select>'+
      '<div class="pure-controls">' +
        '<button id="choose-btn" class="btn btn-primary btn-lg pairedButtons">Search</button>' +
      '</div>' +
    '</fieldset>' +
  '</form>' +
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'
);
