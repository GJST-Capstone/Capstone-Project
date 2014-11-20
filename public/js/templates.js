app.templates = {};

app.templates.main = _.template(
    '<div id="fakeDataList"></div>'
    );

app.templates.listItem = _.template(
  '<p class="lead">{{title}}:</p>' +
  '<p>{{description}}</p>'
  );



