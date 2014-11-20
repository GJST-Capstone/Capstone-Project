app.fakeDataModel = Backbone.Model.extend({});

app.FakeDataCollection = Backbone.Collection.extend({
  model: app.fakeDataModel,
  comparator: 'cid'
});

app.fakeDataCol = new app.FakeDataCollection();

app.fakeDataCol.add([
  { 
    title: 'fake data title one',
    description: 'some health stuff'
  },
  { 
    title: 'fake data title two',
    description: 'other health related things'
  },
  { 
    title: 'fake data title three',
    description: 'get your health on'
  }
]);

app.FakeDataListView = Backbone.View.extend({
  el: '#fakeDataList',
  initialize: function () {
  },
  render: function () {
    var outputHtml = '';
    this.collection.models.forEach(function (item) {
      var data = {};
      data.title = item.get('title');
      data.description = item.get('description');
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
