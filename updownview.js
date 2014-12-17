app.updownModel = Backbone.Model.extend({})

app.UpdownCollection = Backbone.Collection.extend({
  model: app.updownModel,
  comparator: 'cid'
});

app.updownCol = new app.UpdownCollection();