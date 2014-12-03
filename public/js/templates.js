app.templates = {};

app.templates.indexview = _.template(
    '<div>hello</div>'
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