// Demo for updating a partially-saved backbone collection

var Model = Backbone.Model.extend({
	defaults: {
		like:0
	}
});

var Collection = Backbone.Collection.extend({
	url: '/api',
	model:  Model,
	display: function() { //custom method
		console.log("Keys:  "+this.pluck('key'));
		console.log("likes:"+this.pluck('like'));
	}
})

var coll = new Collection();
// fill coll with 16 models with unique keys
for (var key = 0; key<16; ++key) {
	coll.add({key:key});  // adds models to collection, but doesn't save
}
coll.display();

//console.log("Keys:"+coll.pluck('key'));
//console.log("likes:"+coll.pluck('like')); // all likes start at 0




function findModel(key) {
	var models = coll.where({key:key});
	if (models.length > 1) throw "found multiple models";
	if (models.length == 0) throw "found no models";
	return models[0];
}

function incrementLike(key) {
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
	// Make a GET request listing all keys of collection (in URL query)
	// Can simulate in terminal: curl localhost:1337/api?keys=1,2,3
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