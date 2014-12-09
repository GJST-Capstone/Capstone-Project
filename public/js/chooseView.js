


app.chooseModel = Backbone.Model.extend({});

app.ChooseCollection = Backbone.Collection.extend({
  model: app.chooseModel,
  comparator: 'cid'
});

app.chooseCol = new app.ChooseCollection();

app.chooseCol.add([
  {
  	chooseInputVal: 'workout',
  },
]);
    
app.ChooseView = Backbone.View.extend({
  el: '#my-app',
  render: function () {
    this.$el.html(app.templates.chooseForm);
    app.chooseInputView = new app.ChooseInputView({collection: this.collection});
  }
});

app.ChooseInputView = Backbone.View.extend({
  el: '#choose-form',
  events: {
     'click #choose-btn': 'chooseForVal' // listen for change of <select> element.
  },
  chooseForVal: function (event) {
    event.preventDefault();
    var chooseValOne = this.$(".choose-controlOne").val()
    var chooseValTwo = this.$(".choose-controlTwo").val()
    var chooseValThree = this.$(".choose-controlThree").val()
    var chooseValConcat = chooseValOne +'+'+ chooseValTwo +'+'+ chooseValThree;
    var chooseVal = chooseValConcat;

    console.log(chooseValConcat);

    
    var $chooseSelect = $(this.el).find('#choose-control');
    
    var chooseSelect = chooseVal;
    this.collection.add({chooseInputVal: chooseSelect});
    //$chooseSelect.val('');
    console.log('button was clicked');
    //delete old col by creating a new one
    app.videosCol = new app.Videos();
    //add results to new col
    app.resultsView = new app.ResultsView({collection: app.videosCol});
    addChoose();
    app.router.navigate('#results/', { trigger: true})
  }
});