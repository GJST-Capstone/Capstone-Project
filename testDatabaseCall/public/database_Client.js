
var Model = Backbone.Model.extend({
	defaults: {
		like:0
	}
});

var Collection = Backbone.Collection.extend({
	url: '/api',
	model:  Model,
	display: function() { //custom method
		console.log("Keys: "+this.pluck('key'));
		console.log("likes: "+this.pluck('like'));
	}
})

var coll = new Collection();
var videoList = ['G5rpjkIQ2M8','BSrSoN529CY'] // replace with array of results videoIds
for (var key = 0; key<videoList.length; ++key) {
	coll.add({key:videoList[key]});  // adds models to collection, but doesn't save
}
coll.display();


function findModel(key) {
	var models = coll.where({key:key});
	if (models.length > 1) throw "found multiple models";
	if (models.length == 0) throw "found no models";
	return models[0];
}

function incrementLike(key) { // videoId is 'key' and needs to be in a string form 
	var model = findModel(key);
	model.set("like",model.get("like")+1);
	model.save(); //send POST to server, updates db
}

function refreshModel(attrObj) {
	console.log(attrObj);
	var model= findModel(attrObj.key);
	model.set("like",attrObj.like);
}

function refreshCollection() {
	var keyStr = coll.pluck('key').join(',');
	$.get("/api","keys="+keyStr, function(dataStr) {
		// dataStr is JSON array describing models currently in database
		var arr = JSON.parse(dataStr);
		arr.forEach(refreshModel);
		coll.display();
	});
}

// usage:
//refreshCollection();  // updates like of any models saved to db
//incrementLike(3);
//incrementLike(7);
//incrementLike(3);
// etc...